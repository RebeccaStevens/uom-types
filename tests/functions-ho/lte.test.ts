import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { lte } from "#uom-types/functions/higher-order";

test("number", () => {
  expect(lte(4)(4)).equals(true);
  expect(lte(3)(4)).equals(false);
  expect(lte(4)(3)).equals(true);
});

test("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(lte(a)(a)).equals(true);
  expect(lte(b)(b)).equals(true);
  expect(lte(b)(a)).equals(false);
  expect(lte(a)(b)).equals(true);
});
