import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { MeterPerSecondToTheFifth } from "./kinematic-crackle.ts";
import type { MeterPerSecondToTheSixth } from "./kinematic-pop.ts";
import type { Second } from "./time-duration.ts";

describe("meterPerSecondToTheSixth", () => {
  it("is MeterPerSecondToTheFifth per second", () => {
    assert<Equals<MeterPerSecondToTheSixth, Divide<MeterPerSecondToTheFifth, Second>>>();
  });
});
