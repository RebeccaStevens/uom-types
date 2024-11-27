import { expect, it } from "vitest";

import { type Radian, type Unitless, atan } from "../../src/index.ts";

it("unit", () => {
  const expected = (Math.PI / 4) as Radian;
  const actual: Radian = atan(1 as Unitless);

  expect(actual).approximately(expected, 1e-10);
});
