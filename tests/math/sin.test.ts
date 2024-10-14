import { expect, it } from "vitest";

import { sin } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

it("unit", () => {
  const expected = 0 as Unitless;
  const actual: Unitless = sin((2 * Math.PI) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
