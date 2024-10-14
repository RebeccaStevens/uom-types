import { expect, it } from "vitest";

import { type Unit, gte } from "../../src";

it("number", () => {
  expect(gte(4, 4)).equals(true);
  expect(gte(4, 3)).equals(true);
  expect(gte(3, 4)).equals(false);
});

it("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(gte(a, a)).equals(true);
  expect(gte(b, b)).equals(true);
  expect(gte(a, b)).equals(true);
  expect(gte(b, a)).equals(false);
});
