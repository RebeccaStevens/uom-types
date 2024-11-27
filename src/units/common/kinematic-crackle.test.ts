import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { MeterPerSecondToTheFifth } from "./kinematic-crackle.ts";
import type { MeterPerSecondToTheFourth } from "./kinematic-snap.ts";
import type { Second } from "./time-duration.ts";

describe("meterPerSecondToTheFifth", () => {
  it("is MeterPerSecondToTheFourth per second", () => {
    assert<Equals<MeterPerSecondToTheFifth, Divide<MeterPerSecondToTheFourth, Second>>>();
  });
});
