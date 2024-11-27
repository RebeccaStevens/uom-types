import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { MeterPerSecondCubed } from "./kinematic-jerk.ts";
import type { MeterPerSecondToTheFourth } from "./kinematic-snap.ts";
import type { Second } from "./time-duration.ts";

describe("meterPerSecondToTheFourth", () => {
  it("is MeterPerSecondCubed per second", () => {
    assert<Equals<MeterPerSecondToTheFourth, Divide<MeterPerSecondCubed, Second>>>();
  });
});
