import { expect, it } from "vitest";

import { type Unit, root } from "../../index.ts";

it("numbers", () => {
  expect(root(0.5)(64)).equals(4096);
  expect(root(1)(64)).approximately(64, 1e-10);
  expect(root(2)(64)).approximately(8, 1e-10);
  expect(root(3)(64)).approximately(4, 1e-10);
});

it("unit by number", () => {
  const a = 64 as Unit<{ a: -6; b: 6 }>;

  const expected4 = 64 as Unit<{ a: -6; b: 6 }>;
  const actual4: typeof expected4 = root(1)(a);
  expect(actual4).approximately(expected4, 1e-10);

  const expected5 = 8 as Unit<{ a: -3; b: 3 }>;
  const actual5: typeof expected5 = root(2)(a);
  expect(actual5).approximately(expected5, 1e-10);

  const expected6 = 4 as Unit<{ a: -2; b: 2 }>;
  const actual6: typeof expected6 = root(3)(a);
  expect(actual6).approximately(expected6, 1e-10);
});
