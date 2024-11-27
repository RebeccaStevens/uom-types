import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Radian } from "./angle-plane.ts";
import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { AmpereRadian } from "./electromagnetic-magnetomotive-force.ts";

describe("ampereRadian", () => {
  it("is amperes by radians", () => {
    assert<Equals<AmpereRadian, Multiply<Ampere, Radian>>>();
  });
});
