import { expect, it } from "vitest";

import { type Radian, type Unitless, cos } from "../../src";

it("unit", () => {
  const expected = 1 as Unitless;
  const actual: Unitless = cos((2 * Math.PI) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
