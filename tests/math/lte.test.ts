import { expect, it } from "vitest";

import { type Unit, lte } from "../../src";

it("number", () => {
  expect(lte(4, 4)).equals(true);
  expect(lte(4, 3)).equals(false);
  expect(lte(3, 4)).equals(true);
});

it("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(lte(a, a)).equals(true);
  expect(lte(b, b)).equals(true);
  expect(lte(a, b)).equals(false);
  expect(lte(b, a)).equals(true);
});
