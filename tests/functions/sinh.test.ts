import { expect, test } from "vitest";

import { sinh } from "#uom-types/functions";
import { type Unitless, type Radian } from "#uom-types/units";

test("unit", () => {
  const expected = 11.549 as Unitless;
  const actual: Unitless = sinh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
