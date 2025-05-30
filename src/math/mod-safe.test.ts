import { expect, it } from "vitest";

import { type Unit, modSafe } from "../index.ts";

it("numbers", () => {
  expect(modSafe(10, 3)).equals(1);
  expect(modSafe(11, 3)).equals(2);
  expect(modSafe(12, 3)).equals(0);
  expect(modSafe(-8, 3)).equals(1);
});

it("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1: TestUnit = modSafe(a, b);

  expect(actual1).equals(expected1);

  const c = -10 as TestUnit;
  const expected2 = 2 as TestUnit;

  const actual2: TestUnit = modSafe(c, b);

  expect(actual2).equals(expected2);
});
