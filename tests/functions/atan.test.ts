import { expect, test } from "vitest";

import { atan } from "#uom-types/functions";
import { type Radian, type Unitless } from "#uom-types/units";

test("unit", () => {
  const expected = (Math.PI / 4) as Radian;
  const actual: Radian = atan(1 as Unitless);

  expect(actual).approximately(expected, 1e-10);
});
