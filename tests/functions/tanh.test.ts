import { expect, test } from "vitest";

import { tanh } from "#uom-types/functions";
import { type Unitless, type Radian } from "#uom-types/units";

test("unit", () => {
  const expected = 0.996 as Unitless;
  const actual: Unitless = tanh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
