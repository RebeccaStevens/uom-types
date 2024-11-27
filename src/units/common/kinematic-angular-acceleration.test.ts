import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Radian } from "./angle-plane.ts";
import type { RadianPerSecondSquared } from "./kinematic-angular-acceleration.ts";
import type { RadianPerSecond } from "./kinematic-angular-velocity.ts";
import type { Second } from "./time-duration.ts";

describe("radianPerSecondSquared", () => {
  it("is radians per squared second", () => {
    assert<Equals<RadianPerSecondSquared, Divide<Radian, Square<Second>>>>();
  });

  it("is radians per second per second", () => {
    assert<Equals<RadianPerSecondSquared, Divide<RadianPerSecond, Second>>>();
  });
});
