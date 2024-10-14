import { expect, it } from "vitest";

import { tanh } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

it("unit", () => {
  const expected = 0.996 as Unitless;
  const actual: Unitless = tanh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
