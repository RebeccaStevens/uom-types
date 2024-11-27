import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { MeterPerSecondSquared } from "./kinematic-acceleration.ts";
import type { MeterPerSecond } from "./kinematic-velocity.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Second } from "./time-duration.ts";

describe("meterPerSecond", () => {
  it("is meters per second", () => {
    assert<Equals<MeterPerSecond, Divide<Meter, Second>>>();
  });

  it("is meters per second squared by seconds", () => {
    assert<Equals<MeterPerSecond, Multiply<MeterPerSecondSquared, Second>>>();
  });
});
