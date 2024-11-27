import { expect, it } from "vitest";

import { type Radian, type Unitless, sin } from "../index.ts";

it("unit", () => {
  const expected = 0 as Unitless;
  const actual: Unitless = sin((2 * Math.PI) as Radian);

  expect(actual).approximately(expected, 1e-10);
});
