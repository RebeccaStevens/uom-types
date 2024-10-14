import { expect, it } from "vitest";

import type { Unit } from "#uom-types";
import { eq } from "#uom-types/math";

it("number", () => {
  expect(eq(4, 4)).equals(true);
  expect(eq(-4, -4)).equals(true);
  expect(eq(-4, 4)).equals(false);
  expect(eq(4, -4)).equals(false);
});

it("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(eq(a, a)).equals(true);
  expect(eq(b, b)).equals(true);
  expect(eq(a, b)).equals(false);
  expect(eq(b, a)).equals(false);
});
