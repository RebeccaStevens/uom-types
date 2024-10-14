import { expect, test } from "vitest";

import { atan2 } from "#uom-types/math";
import { type Meter, type Radian } from "#uom-types/units";

test("number", () => {
  const expected = (Math.PI / 4) as Radian;
  const actual: Radian = atan2(2, 2);

  expect(actual).approximately(expected, 1e-10);
});

test("unit", () => {
  const expected = (Math.PI / 4) as Radian;
  const actual: Radian = atan2(2 as Meter, 2 as Meter);

  expect(actual).approximately(expected, 1e-10);
});
