import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { GrayPerSecond } from "./mechanical-absorbed-dose-rate.ts";
import type { Gray } from "./mechanical-enthalpy.ts";
import type { Second } from "./time-duration.ts";

describe("grayPerSecond", () => {
  it("is grays per second", () => {
    assert<Equals<GrayPerSecond, Divide<Gray, Second>>>();
  });
});
