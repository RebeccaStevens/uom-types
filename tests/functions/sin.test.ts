import { expect, test } from "vitest";

import { sin } from "#uom-types/functions";
import { type Unitless, type Radian } from "#uom-types/units";

test("unit", () => {
  const expected = 0 as Unitless;
  const actual: Unitless = sin((2 * Math.PI) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
