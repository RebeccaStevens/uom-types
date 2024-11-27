import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { MeterPerSecondSquared } from "./kinematic-acceleration.ts";
import type { Newton } from "./mechanical-force.ts";
import type { Gram } from "./mechanical-mass.ts";

describe("newton", () => {
  it("is kilograms by meters per squared second", () => {
    assert<Equals<Newton, Multiply<Kilo<Gram>, MeterPerSecondSquared>>>();
  });
});
