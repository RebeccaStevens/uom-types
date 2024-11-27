import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Newton } from "./mechanical-force.ts";
import type { Meter } from "./mechanical-length.ts";
import type { JoulePerSquareMeter } from "./mechanical-radiant-exposure.ts";
import type { NewtonPerMeter } from "./mechanical-stiffness.ts";

describe("newtonPerMeter", () => {
  it("is joules per square meter", () => {
    assert<Equals<NewtonPerMeter, JoulePerSquareMeter>>();
  });
  it("is newtons per meter", () => {
    assert<Equals<NewtonPerMeter, Divide<Newton, Meter>>>();
  });
});
