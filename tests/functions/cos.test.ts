import { expect, test } from "vitest";

import { cos } from "#uom-types/functions";
import { type Unitless, type Radian } from "#uom-types/units";

test("unit", () => {
  const expected = 1 as Unitless;
  const actual: Unitless = cos((2 * Math.PI) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
