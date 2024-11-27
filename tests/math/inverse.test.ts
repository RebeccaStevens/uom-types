import { expect, it } from "vitest";

import { type Unit, inverse } from "../../src/index.ts";

it("number", () => {
  expect(inverse(4)).equals(0.25);
  expect(inverse(0.25)).equals(4);
});

it("unit", () => {
  type TestUnit = Unit<{ a: -1; b: 2; c: -2 }>;
  const expected = 0.25 as TestUnit;
  const actual: Unit<{ a: 1; b: -2; c: 2 }> = inverse(4 as TestUnit);

  expect(actual).equals(expected);
});
