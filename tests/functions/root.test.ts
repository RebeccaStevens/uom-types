import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { root } from "#uom-types/math";

test("numbers", () => {
  expect(root(64, -1)).approximately(1 / 64, 1e-10);
  expect(root(64, 0.5)).approximately(4096, 1e-10);
  expect(root(64, 1)).approximately(64, 1e-10);
  expect(root(64, 2)).approximately(8, 1e-10);
  expect(root(64, 3)).approximately(4, 1e-10);
});

test("unit by number", () => {
  const a = 64 as Unit<{ a: -6; b: 6 }>;

  const expected4 = 64 as Unit<{ a: -6; b: 6 }>;
  const actual4: typeof expected4 = root(a, 1);
  expect(actual4).approximately(expected4, 1e-10);

  const expected5 = 8 as Unit<{ a: -3; b: 3 }>;
  const actual5: typeof expected5 = root(a, 2);
  expect(actual5).approximately(expected5, 1e-10);

  const expected6 = 4 as Unit<{ a: -2; b: 2 }>;
  const actual6: typeof expected6 = root(a, 3);
  expect(actual6).approximately(expected6, 1e-10);
});
