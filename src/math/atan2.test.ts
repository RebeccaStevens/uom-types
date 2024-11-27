import { expect, it } from "vitest";

import { type Meter, type Radian, atan2 } from "../index.ts";

it("number", () => {
  const expected = (Math.PI / 4) as Radian;
  const actual: Radian = atan2(2, 2);

  expect(actual).approximately(expected, 1e-10);
});

it("unit", () => {
  const expected = (Math.PI / 4) as Radian;
  const actual: Radian = atan2(2 as Meter, 2 as Meter);

  expect(actual).approximately(expected, 1e-10);
});
