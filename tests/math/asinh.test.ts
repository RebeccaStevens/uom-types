import { expect, it } from "vitest";

import { type Radian, type Unitless, asinh } from "../../src/index.ts";

it("unit", () => {
  const expected = 0 as Radian;
  const actual: Radian = asinh(0 as Unitless);

  expect(actual).approximately(expected, 1e-3);
});
