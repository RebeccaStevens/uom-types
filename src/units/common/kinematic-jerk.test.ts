import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { MeterPerSecondSquared } from "./kinematic-acceleration.ts";
import type { MeterPerSecondCubed } from "./kinematic-jerk.ts";
import type { Second } from "./time-duration.ts";

describe("meterPerSecondCubed", () => {
  it("is meters per squared second per second", () => {
    assert<Equals<MeterPerSecondCubed, Divide<MeterPerSecondSquared, Second>>>();
  });
});
