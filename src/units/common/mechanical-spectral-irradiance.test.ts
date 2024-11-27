import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { WattPerCubicMeter } from "./mechanical-spectral-irradiance.ts";
import type { Watt } from "./power.ts";

describe("wattPerCubicMeter", () => {
  it("is watts per cubic meter", () => {
    assert<Equals<WattPerCubicMeter, Divide<Watt, Cubic<Meter>>>>();
  });
});
