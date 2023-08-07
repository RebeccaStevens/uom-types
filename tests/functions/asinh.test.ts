import { expect, test } from "vitest";

import { asinh } from "#uom-types/functions";
import { type Radian, type Unitless } from "#uom-types/units";

test("unit", () => {
  const expected = 0 as Radian;
  const actual: Radian = asinh(0 as Unitless);

  expect(actual).approximately(expected, 1e-3);
});
