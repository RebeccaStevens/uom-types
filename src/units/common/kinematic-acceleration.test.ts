import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { MeterPerSecondSquared } from "./kinematic-acceleration.ts";
import type { MeterPerSecond } from "./kinematic-velocity.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Second } from "./time-duration.ts";

describe("meterPerSecondSquared", () => {
  it("is meters per squared second", () => {
    assert<Equals<MeterPerSecondSquared, Divide<Meter, Square<Second>>>>();
  });

  it("is meters per second per second", () => {
    assert<Equals<MeterPerSecondSquared, Divide<MeterPerSecond, Second>>>();
  });
});
