import { expect, it } from "vitest";

import { cos } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

it("unit", () => {
  const expected = 1 as Unitless;
  const actual: Unitless = cos((2 * Math.PI) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
