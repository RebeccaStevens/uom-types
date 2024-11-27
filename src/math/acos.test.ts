import { expect, it } from "vitest";

import { type Radian, type Unitless, acos } from "../index.ts";

it("unit", () => {
  const expected = 0 as Radian;
  const actual: Radian = acos(1 as Unitless);

  expect(actual).approximately(expected, 1e-10);
});
