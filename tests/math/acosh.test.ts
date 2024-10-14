import { expect, it } from "vitest";

import { type Radian, type Unitless, acosh } from "../../src";

it("unit", () => {
  const expected = 0 as Radian;
  const actual: Radian = acosh(1 as Unitless);

  expect(actual).approximately(expected, 1e-3);
});
