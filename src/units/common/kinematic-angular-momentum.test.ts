import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Radian } from "./angle-plane.ts";
import type { JouleSecondPerRadian } from "./kinematic-angular-momentum.ts";
import type { Joule } from "./mechanical-energy.ts";
import type { Second } from "./time-duration.ts";

describe("jouleSecondPerRadian", () => {
  it("is joules by seconds per radian", () => {
    assert<Equals<JouleSecondPerRadian, Divide<Multiply<Joule, Second>, Radian>>>();
  });
});
