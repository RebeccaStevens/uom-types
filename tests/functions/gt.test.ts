import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { gt } from "#uom-types/math";

test("number", () => {
  expect(gt(4, 4)).equals(false);
  expect(gt(4, 3)).equals(true);
  expect(gt(3, 4)).equals(false);
});

test("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(gt(a, a)).equals(false);
  expect(gt(b, b)).equals(false);
  expect(gt(a, b)).equals(true);
  expect(gt(b, a)).equals(false);
});
