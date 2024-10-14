import { expect, it } from "vitest";

import { atanh } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

it("unit", () => {
  const expected = 0.549 as Radian;
  const actual: Radian = atanh(0.5 as Unitless);

  expect(actual).approximately(expected, 1e-3);
});
