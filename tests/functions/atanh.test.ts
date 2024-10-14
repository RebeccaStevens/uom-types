import { expect, test } from "vitest";

import { atanh } from "#uom-types/math";
import { type Radian, type Unitless } from "#uom-types/units";

test("unit", () => {
  const expected = 0.549 as Radian;
  const actual: Radian = atanh(0.5 as Unitless);

  expect(actual).approximately(expected, 1e-3);
});
