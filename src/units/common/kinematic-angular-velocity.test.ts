import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Radian } from "./angle-plane.ts";
import type { RadianPerSecondSquared } from "./kinematic-angular-acceleration.ts";
import type { RadianPerSecond } from "./kinematic-angular-velocity.ts";
import type { Second } from "./time-duration.ts";

describe("radianPerSecond", () => {
  it("is radian per seconds", () => {
    assert<Equals<RadianPerSecond, Divide<Radian, Second>>>();
  });

  it("is radian per squared second by seconds", () => {
    assert<Equals<RadianPerSecond, Multiply<RadianPerSecondSquared, Second>>>();
  });
});
