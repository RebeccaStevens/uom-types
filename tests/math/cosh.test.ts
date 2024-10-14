import { expect, it } from "vitest";

import { cosh } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

it("unit", () => {
  const expected = 11.592 as Unitless;
  const actual: Unitless = cosh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
