import fs from "node:fs/promises";

const maxExponent = 12;
const supportInverse = false as boolean;
const supportMultiples = [2];

const exponents = new Set<number | string>();
const exponentToNegitive = new Map<number | string, number | string>();
const exponentToInverse = new Map<number | string, number | string>();

populateExponents();

const integerExponents = [...exponents.values()].filter(
  (exponent): exponent is number => typeof exponent === "number",
);

const exponentTypeDefintion = getExponentTypeDefintion();
const negativeExponentTypeDefintion = getNegativeExponentTypeDefintion();
const inverseExponentTypeDefintion = getInverseExponentTypeDefintion();
const sumExponentsTypeDefintion = getSumExponentsTypeDefintion();
const subExponentsTypeDefintion = getSubExponentsTypeDefintion();
const multiplyExponentsTypeDefintion = getMultiplyExponentsTypeDefintion();
const divideExponentsTypeDefintion = getDivideExponentsTypeDefintion();

const withInverse = [
  exponentTypeDefintion,
  negativeExponentTypeDefintion,
  inverseExponentTypeDefintion,
  sumExponentsTypeDefintion,
  subExponentsTypeDefintion,
  multiplyExponentsTypeDefintion,
  divideExponentsTypeDefintion,
];

const withoutInverse = [
  exponentTypeDefintion,
  negativeExponentTypeDefintion,
  sumExponentsTypeDefintion,
  subExponentsTypeDefintion,
  multiplyExponentsTypeDefintion,
  divideExponentsTypeDefintion,
];

const content = (supportInverse ? withInverse : withoutInverse)
  .map((v) => `export ${v}`)
  .join("\n");

await fs.writeFile("src/base/exponents.ts", content, { encoding: "utf8" });

function populateExponents() {
  for (const exponent of Array.from({ length: maxExponent + 1 }, (_, i) => i)) {
    if (exponent === 0) {
      exponents.add(0);
      exponentToNegitive.set(0, 0);
      if (supportInverse) {
        exponentToInverse.set(0, 0);
      }
      continue;
    }

    const negativeExponent = -exponent;

    if (exponent === 1) {
      exponents.add(exponent);
      exponents.add(negativeExponent);

      exponentToNegitive.set(exponent, negativeExponent);
      exponentToNegitive.set(negativeExponent, exponent);

      if (supportInverse) {
        exponentToInverse.set(exponent, exponent);
        exponentToInverse.set(negativeExponent, negativeExponent);
      }
      continue;
    }

    exponents.add(exponent);
    exponents.add(negativeExponent);

    exponentToNegitive.set(exponent, negativeExponent);
    exponentToNegitive.set(negativeExponent, exponent);

    if (supportInverse) {
      const inverseExponent = `"1/${exponent}"`;
      const negativeInverseExponent = `"-1/${exponent}"`;

      exponents.add(inverseExponent);
      exponents.add(negativeInverseExponent);

      exponentToNegitive.set(inverseExponent, negativeInverseExponent);
      exponentToNegitive.set(negativeInverseExponent, inverseExponent);

      exponentToInverse.set(exponent, inverseExponent);
      exponentToInverse.set(negativeExponent, negativeInverseExponent);
      exponentToInverse.set(inverseExponent, exponent);
      exponentToInverse.set(negativeInverseExponent, negativeExponent);
    }
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

function getInverseExponentTypeDefintion() {
  return `type InverseExponent<T extends Exponent> = ${[
    ...exponentToInverse.entries(),
  ]
    .map(
      ([exponent, inverseExponent]) =>
        `T extends ${exponent} ? ${inverseExponent} :`,
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
      const inverseA = exponentToInverse.get(a);
      const v = inverseA === undefined ? "" : `B extends ${inverseA} ? 1 :`;

      return `A extends ${a} ? ${integerExponents
        .map((b) => {
          const product = a * b;
          return exponents.has(product)
            ? `B extends ${b} ? ${product} :`
            : null;
        })
        .filter(isNotNull)
        .join(" ")}${v} never :`;
    })
    .join(" ")} never;`;
}

function getDivideExponentsTypeDefintion() {
  return `type DivideExponents<A extends Exponent, B extends Exponent> = ${supportMultiples
    .map((b) => {
      return `B extends ${b} ? ${integerExponents
        .map((a) => {
          const inverseB = exponentToInverse.get(b);

          const result = a / b;
          return exponents.has(result)
            ? `A extends ${a} ? ${result} :`
            : a === 1 && inverseB !== undefined
            ? `A extends 1 ? ${inverseB} : `
            : null;
        })
        .filter(isNotNull)
        .join(" ")} never :`;
    })
    .join(" ")} never;`;
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
