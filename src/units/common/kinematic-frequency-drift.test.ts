import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { HertzPerSecond } from "./kinematic-frequency-drift.ts";
import type { Hertz } from "./kinematic-frequency.ts";
import type { Second } from "./time-duration.ts";

describe("meterPerSecondToTheFifth", () => {
  it("is hertz per second", () => {
    assert<Equals<HertzPerSecond, Divide<Hertz, Second>>>();
  });
});
