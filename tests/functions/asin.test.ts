import { expect, test } from "vitest";

import { asin } from "#uom-types/math";
import { type Radian, type Unitless } from "#uom-types/units";

test("unit", () => {
  const expected = 0 as Radian;
  const actual: Radian = asin(0 as Unitless);

  expect(actual).approximately(expected, 1e-10);
});
