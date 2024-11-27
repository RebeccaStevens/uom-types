import { expect, it } from "vitest";

import { type Radian, type Unitless, sinh } from "../../src/index.ts";

it("unit", () => {
  const expected = 11.549 as Unitless;
  const actual: Unitless = sinh(Math.PI as Radian);

  expect(actual).approximately(expected, 1e-3);
});
