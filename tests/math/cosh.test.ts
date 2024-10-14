import { expect, it } from "vitest";

import { type Radian, type Unitless, cosh } from "../../src";

it("unit", () => {
  const expected = 11.592 as Unitless;
  const actual: Unitless = cosh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
