import { expect, it } from "vitest";

import { type Unit, min } from "../../src";

it("number", () => {
  const list = [1, 3, 6, 4, -5, 2];

  expect(min(list)).equals(-5);
});

it("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;
  const list = [1, 3, 6, 4, -5, 2] as TestUnit[];
  const expected = -5 as TestUnit;
  const actual: TestUnit = min(list);

  expect(actual).equals(expected);
});
