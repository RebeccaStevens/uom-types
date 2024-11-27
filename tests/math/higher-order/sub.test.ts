import { expect, it } from "vitest";

import { type Unit, sub } from "../../../src/index.ts";

it("numbers", () => {
  expect(sub(2)(1)).equals(-1);
  expect(sub(2)(4)).equals(2);
  expect(sub(-2)(1)).equals(3);
  expect(sub(-2)(-1)).equals(1);
});

it("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 3 as TestUnit;
  const b = 2 as TestUnit;
  const expected = 1 as TestUnit;

  const actual: typeof expected = sub(b)(a);

  expect(actual).equals(expected);
});
