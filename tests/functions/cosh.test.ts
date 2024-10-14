import { expect, test } from "vitest";

import { cosh } from "#uom-types/math";
import { type Unitless, type Radian } from "#uom-types/units";

test("unit", () => {
  const expected = 11.592 as Unitless;
  const actual: Unitless = cosh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
