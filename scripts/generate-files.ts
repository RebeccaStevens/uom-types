import fs from "node:fs/promises";

const maxExponent = 12;
const supportMultiples = [2];

const autogenHeader = `/**
 * @file Autogenerated File - Don't manually edit.
 */\n\n`;

const exponents = new Set<number>();
const exponentToNegitive = new Map<number, number>();

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
  return Promise.all([generateExponentsFile(), generateSiUnitPrefixesFile()]);
}

function generateExponentsFile() {
  const main = [
    getExponentTypeDefintion(),
    getNegativeExponentTypeDefintion(),
    getSumExponentsTypeDefintion(),
    getSubExponentsTypeDefintion(),
    getMultiplyExponentsTypeDefintion(),
    getDivideExponentsTypeDefintion(),
  ]
    .map((v) => `export ${v}`)
    .join("\n");

  const content = `${autogenHeader}${main}\n`;

  return fs.writeFile("src/exponents.ts", content, { encoding: "utf8" });
}

function generateSiUnitPrefixesFile() {
  const imports = `import { type MultiplyUnit, type Unit, type UnknownUnit } from "#uom-types";\n\n`;
  const main = [...exponents.values()]
    .map((exponent) => {
      const name = scalar10ToName.get(exponent);
      if (name === undefined) {
        return null;
      }
      return `/**\n * Binary prefix denoting an orders of magnitude of 10^${exponent}.\n *\n * @siprefix\n */\nexport type ${name}<T extends UnknownUnit> = MultiplyUnit<T, Unit<{}, { scalar10: ${exponent} }>>;`;
    })
    .filter(isNotNull)
    .join("\n\n");
  const content = `${autogenHeader}${imports}${main}\n`;
  return fs.writeFile("src/units/prefixes.ts", content, { encoding: "utf8" });
}

function populateExponents() {
  for (const exponent of Array.from({ length: maxExponent + 1 }, (_, i) => i)) {
    if (exponent === 0) {
      exponents.add(0);
      exponentToNegitive.set(0, 0);
      continue;
    }

    const negativeExponent = -exponent;

    if (exponent === 1) {
      exponents.add(exponent);
      exponents.add(negativeExponent);

      exponentToNegitive.set(exponent, negativeExponent);
      exponentToNegitive.set(negativeExponent, exponent);
      continue;
    }

    exponents.add(exponent);
    exponents.add(negativeExponent);

    exponentToNegitive.set(exponent, negativeExponent);
    exponentToNegitive.set(negativeExponent, exponent);
  }
}

function getExponentTypeDefintion() {
  return `type Exponent = ${[...exponents.values()].join(" | ")};`;
}

function getNegativeExponentTypeDefintion() {
  return `type NegativeExponent<T extends Exponent> = ${[
    ...exponentToNegitive.entries(),
  ]
    .map(
      ([exponent, negativeExponent]) =>
        `T extends ${exponent} ? ${negativeExponent} :`,
    )
    .join(" ")} never;`;
}

function getSumExponentsTypeDefintion() {
  return `type SumExponents<A extends Exponent, B extends Exponent> = ${[
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
  return `type SubExponents<A extends Exponent, B extends Exponent> = SumExponents<A, NegativeExponent<B>>`;
}

function getMultiplyExponentsTypeDefintion() {
  return `type MultiplyExponents<A extends Exponent, B extends Exponent> = ${supportMultiples
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
  return `type DivideExponents<A extends Exponent, B extends Exponent> = ${supportMultiples
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
