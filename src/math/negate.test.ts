import { expect, it } from "vitest";

import { type Unit, negate } from "../index.ts";

it("number", () => {
  expect(negate(4)).equals(-4);
  expect(negate(-4)).equals(4);
});

it("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 2 }>;
  const expected = -4 as TestUnit;
  const actual: typeof expected = negate(4 as TestUnit);

  expect(actual).equals(expected);
});
