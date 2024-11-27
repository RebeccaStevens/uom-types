import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { Steradian } from "./angle-solid.ts";
import type { Meter } from "./mechanical-length.ts";
import type { WattPerSteradianCubicMeter } from "./mechanical-radiance-spectral.ts";
import type { Watt } from "./power.ts";

describe("wattPerSteradianCubicMeter", () => {
  it("is watts per steradian cubic meter", () => {
    assert<Equals<WattPerSteradianCubicMeter, Divide<Watt, Multiply<Steradian, Cubic<Meter>>>>>();
  });
});
