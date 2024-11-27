import { expect, it } from "vitest";

import { type Radian, type Unitless, tan } from "../../src/index.ts";

it("unit", () => {
  const expected = 1 as Unitless;
  const actual: Unitless = tan((Math.PI / 4) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
