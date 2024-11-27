import { expect, it } from "vitest";

import { type Unit, sum } from "../../src/index.ts";

it("number", () => {
  const list = [1, 3, 6, 4, -5, 2];

  expect(sum(list)).equals(11);
});

it("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;
  const list = [1, 3, 6, 4, -5, 2] as TestUnit[];
  const expected = 11 as TestUnit;

  const actual: typeof expected = sum(list);

  expect(actual).equals(expected);
});
