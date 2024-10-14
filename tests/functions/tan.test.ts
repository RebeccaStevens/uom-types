import { expect, test } from "vitest";

import { tan } from "#uom-types/math";
import { type Unitless, type Radian } from "#uom-types/units";

test("unit", () => {
  const expected = 1 as Unitless;
  const actual: Unitless = tan((Math.PI / 4) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
