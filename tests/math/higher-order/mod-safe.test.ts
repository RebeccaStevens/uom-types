import { expect, it } from "vitest";

import { type Unit, modSafe } from "../../../src";

it("numbers", () => {
  expect(modSafe(3)(10)).equals(1);
  expect(modSafe(3)(11)).equals(2);
  expect(modSafe(3)(12)).equals(0);
  expect(modSafe(3)(-8)).equals(1);
});

it("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1: typeof expected1 = modSafe(b)(a);

  expect(actual1).equals(expected1);

  const c = -10 as TestUnit;
  const expected2 = 2 as TestUnit;

  const actual2: typeof expected2 = modSafe(b)(c);

  expect(actual2).equals(expected2);
});
