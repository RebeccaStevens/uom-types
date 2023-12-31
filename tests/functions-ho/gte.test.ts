import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { gte } from "#uom-types/functions/higher-order";

test("number", () => {
  expect(gte(4)(4)).equals(true);
  expect(gte(3)(4)).equals(true);
  expect(gte(4)(3)).equals(false);
});

test("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(gte(a)(a)).equals(true);
  expect(gte(b)(b)).equals(true);
  expect(gte(b)(a)).equals(true);
  expect(gte(a)(b)).equals(false);
});
