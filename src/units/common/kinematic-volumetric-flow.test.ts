import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { CubicMeterPerSecond } from "./kinematic-volumetric-flow.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Second } from "./time-duration.ts";

describe("cubicMeterPerSecond", () => {
  it("is cubic meters per second", () => {
    assert<Equals<CubicMeterPerSecond, Divide<Cubic<Meter>, Second>>>();
  });
});
