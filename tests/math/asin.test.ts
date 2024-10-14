import { expect, it } from "vitest";

import { type Radian, type Unitless, asin } from "../../src";

it("unit", () => {
  const expected = 0 as Radian;
  const actual: Radian = asin(0 as Unitless);

  expect(actual).approximately(expected, 1e-10);
});
