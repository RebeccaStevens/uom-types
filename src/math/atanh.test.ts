import { expect, it } from "vitest";

import { type Radian, type Unitless, atanh } from "../index.ts";

it("unit", () => {
  const expected = 0.549 as Radian;
  const actual: Radian = atanh(0.5 as Unitless);

  expect(actual).approximately(expected, 1e-3);
});
