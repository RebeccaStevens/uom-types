import assert from "node:assert/strict";
import fs from "node:fs/promises";

const maxExponent = 12;

const autogenHeader = `/**
 * @file Autogenerated File - Don't manually edit.
 */\n\n`;

const exponents = new Set<number>();

const scalar10ToName = new Map<number, string>([
  [-30, "Quecto"],
  [-27, "Ronto"],
  [-24, "Yocto"],
  [-21, "Zepto"],
  [-18, "Atto"],
  [-15, "Femto"],
  [-12, "Pico"],
  [-9, "Nano"],
  [-6, "Micro"],
  [-3, "Milli"],
  [-2, "Centi"],
  [-1, "Deci"],
  [1, "Deka"],
  [2, "Hecto"],
  [3, "Kilo"],
  [6, "Mega"],
  [9, "Giga"],
  [12, "Tera"],
  [15, "Peta"],
  [18, "Exa"],
  [21, "Zetta"],
  [24, "Yotta"],
  [27, "Ronna"],
  [30, "Quetta"],
]);

populateExponents();

await generateFiles();

function generateFiles() {
  return Promise.all([
    generateExponentsFile(),
    generateSiUnitPrefixesFile(),
    generateSiUnitPrefixesConvertionFile(),
  ]);
}

function generateExponentsFile() {
  const main = [
    getExponentTypeDefintion(),
    getNegativeExponentTypeDefintion(),
    getSumExponentsTypeDefintion(),
    getSubExponentsTypeDefintion(),
    getMultiplyExponentsTypeDefintion(),
    getDivideExponentsTypeDefintion(),
  ].join("\n\n");

  const content = `${autogenHeader}${main}\n`;

  return fs.writeFile("src/exponents.ts", content, { encoding: "utf8" });
}

function generateSiUnitPrefixesFile() {
  const imports = `import { type Multiply, type UnknownUnit, type UnitConversionRate } from "#uom-types";\n\n`;
  const main = [...exponents.values()]
    .map((exponent) => {
      const name = scalar10ToName.get(exponent);
      if (name === undefined) {
        return null;
      }
      return `/**\n * Binary prefix denoting an order of magnitude of 10^${exponent}.\n *\n * @group Modifiers\n * @category Metric Prefixes\n */\nexport type ${name}<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: ${exponent} }>>;`;
    })
    .filter(isNotNull)
    .join("\n\n");
  const content = `${autogenHeader}${imports}${main}\n`;
  return fs.writeFile("src/units/modifiers/prefixes.ts", content, {
    encoding: "utf8",
  });
}

function generateSiUnitPrefixesConvertionFile() {
  const imports = `import { type UnknownUnit, type UnitConversionRate } from "#uom-types";\nimport { mul, div } from "#uom-types/math";\n\n`;
  const main = [...exponents.values()]
    .map((exponent) => {
      const name = scalar10ToName.get(exponent);
      if (name === undefined) {
        return null;
      }
      const inverseName = scalar10ToName.get(-exponent);
      assert(inverseName !== undefined);
      const negativeExponent = exponent < 0;
      const absExponent = Math.abs(exponent);
      const to = `/**\n * Convert \`X\` to \`${name.toLowerCase()}X\`.\n */\nexport function to${name}<T extends UnknownUnit>(value: T) {\n  return ${
        negativeExponent ? "div" : "mul"
      }(value, ${
        10 ** absExponent
      } as UnitConversionRate<{ scalar10: ${-absExponent} }>);\n}`;
      const from = `/**\n * Convert \`${name.toLowerCase()}X\` to \`X\`.\n */\nexport const from${name} = to${inverseName};`;
      return `${to}\n\n${from}`;
    })
    .filter(isNotNull)
    .join("\n\n");
  const content = `${autogenHeader}${imports}${main}\n`;
  return fs.writeFile("src/units/converters/prefixes.ts", content, {
    encoding: "utf8",
  });
}

function populateExponents() {
  for (const exponent of Array.from({ length: maxExponent + 1 }, (_, i) => i)) {
    if (exponent === 0) {
      exponents.add(0);
      continue;
    }

    exponents.add(exponent);
    exponents.add(-exponent);
  }
}

function getExponentTypeDefintion() {
  const exponentsArray = [...exponents.values()];
  const positive = exponentsArray.filter((x) => x > 0);
  const negative = exponentsArray.filter((x) => x < 0);

  const positiveType = `/**\n * All the supported positive exponent values.\n *\n * @group Unit Components\n */\nexport type PosExponent = ${positive.join(
    " | ",
  )};`;
  const negativeType = `/**\n * All the supported negative exponent values.\n *\n * @group Unit Components\n */\nexport type NegExponent = ${negative.join(
    " | ",
  )};`;
  const allType = `/**\n * All the supported exponent values.\n *\n * @group Unit Components\n */\nexport type Exponent = 0 | PosExponent | NegExponent;`;
  return [positiveType, negativeType, allType].join("\n\n");
}

function getNegativeExponentTypeDefintion() {
  const main = `/**\n * @group Exponent Functions\n */\nexport type NegateExponent<T extends Exponent> = MultiplyExponents<T, -1>`;
  const depreated = `/**\n * @depreated Use {@link NegateExponent} instead.\n */\nexport type NegativeExponent<T extends Exponent> = NegateExponent<T>`;
  return [main, depreated].join("\n\n");
}

function getSumExponentsTypeDefintion() {
  return `/**\n * @group Exponent Functions\n */\nexport type SumExponents<A extends Exponent, B extends Exponent> = ${[
    ...exponents.values(),
  ]
    .map((a) => {
      return `A extends ${a} ? ${[...exponents.values()]
        .map((b) => {
          const sum = a + b;
          return exponents.has(sum) ? `B extends ${b} ? ${sum} :` : null;
        })
        .filter(isNotNull)
        .join(" ")} never :`;
    })
    .join(" ")} never;`;
}

function getSubExponentsTypeDefintion() {
  return `/**\n * @group Exponent Functions\n */\nexport type SubExponents<A extends Exponent, B extends Exponent> = SumExponents<A, NegativeExponent<B>>`;
}

function getMultiplyExponentsTypeDefintion() {
  return `/**\n * @group Exponent Functions\n */\nexport type MultiplyExponents<A extends Exponent, B extends Exponent> = ${[
    ...exponents.values(),
  ]
    .map((a) => {
      return `A extends ${a} ? ${[...exponents.values()]
        .map((b) => {
          const product = a * b;
          return exponents.has(product)
            ? `B extends ${b} ? ${product} :`
            : null;
        })
        .filter(isNotNull)
        .join(" ")} never :`;
    })
    .join(" ")} never;`;
}

function getDivideExponentsTypeDefintion() {
  return `/**\n * @group Exponent Functions\n */\nexport type DivideExponents<A extends Exponent, B extends Exponent> = ${[
    ...exponents.values(),
  ]
    .map((b) => {
      return `B extends ${b} ? ${[...exponents.values()]
        .map((a) => {
          const result = a / b;
          return exponents.has(result) ? `A extends ${a} ? ${result} :` : null;
        })
        .filter(isNotNull)
        .join(" ")} never :`;
    })
    .join(" ")} never;`;
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
