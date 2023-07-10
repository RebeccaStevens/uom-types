import fs from "node:fs/promises";

const maxExponent = 12;
const supportMultiples = [2];

const exponents = new Set<number | string>();
const exponentToNegitive = new Map<number | string, number | string>();

populateExponents();

const integerExponents = [...exponents.values()].filter(
  (exponent): exponent is number => typeof exponent === "number",
);

const exponentTypeDefintion = getExponentTypeDefintion();
const negativeExponentTypeDefintion = getNegativeExponentTypeDefintion();
const sumExponentsTypeDefintion = getSumExponentsTypeDefintion();
const subExponentsTypeDefintion = getSubExponentsTypeDefintion();
const multiplyExponentsTypeDefintion = getMultiplyExponentsTypeDefintion();
const divideExponentsTypeDefintion = getDivideExponentsTypeDefintion();

const content = [
  exponentTypeDefintion,
  negativeExponentTypeDefintion,
  sumExponentsTypeDefintion,
  subExponentsTypeDefintion,
  multiplyExponentsTypeDefintion,
  divideExponentsTypeDefintion,
]
  .map((v) => `export ${v}`)
  .join("\n");

await fs.writeFile("src/exponents.ts", content, { encoding: "utf8" });

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
  return `type SumExponents<A extends Exponent, B extends Exponent> = ${integerExponents
    .map((a) => {
      return `A extends ${a} ? ${integerExponents
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
      return `A extends ${a} ? ${integerExponents
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
      return `B extends ${b} ? ${integerExponents
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
