import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Radian } from "./angle-plane.ts";
import type { NewtonMeterPerRadian } from "./kinematic-torque.ts";
import type { Newton } from "./mechanical-force.ts";
import type { Meter } from "./mechanical-length.ts";
import type { NewtonMeter } from "./mechanical-work.ts";

describe("newtonMeterPerRadian", () => {
  it("is newton meters per radians", () => {
    assert<Equals<NewtonMeterPerRadian, Divide<NewtonMeter, Radian>>>();
  });

  it("is newton by meters per radians", () => {
    assert<Equals<NewtonMeterPerRadian, Divide<Multiply<Newton, Meter>, Radian>>>();
  });
});
