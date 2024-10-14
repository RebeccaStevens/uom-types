import { expect, it } from "vitest";

import { type Radian, type Unitless, tanh } from "../../src";

it("unit", () => {
  const expected = 0.996 as Unitless;
  const actual: Unitless = tanh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
