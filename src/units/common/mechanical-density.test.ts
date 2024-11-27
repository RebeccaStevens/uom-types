import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Cubic, Kilo } from "../modifiers/index.ts";

import type { KilogramPerCubicMeter } from "./mechanical-density.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Gram } from "./mechanical-mass.ts";

describe("kilogramPerCubicMeter", () => {
  it("is kilograms per cubic meter", () => {
    assert<Equals<KilogramPerCubicMeter, Divide<Kilo<Gram>, Cubic<Meter>>>>();
  });
});
