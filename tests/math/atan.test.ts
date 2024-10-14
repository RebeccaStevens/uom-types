import { expect, it } from "vitest";

import { atan } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

it("unit", () => {
  const expected = (Math.PI / 4) as Radian;
  const actual: Radian = atan(1 as Unitless);

  expect(actual).approximately(expected, 1e-10);
});
