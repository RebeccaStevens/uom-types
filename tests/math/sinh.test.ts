import { expect, it } from "vitest";

import { sinh } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

it("unit", () => {
  const expected = 11.549 as Unitless;
  const actual: Unitless = sinh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
