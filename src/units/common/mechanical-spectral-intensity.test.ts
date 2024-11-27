import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Steradian } from "./angle-solid.ts";
import type { Meter } from "./mechanical-length.ts";
import type { WattPerSteradianMeter } from "./mechanical-spectral-intensity.ts";
import type { Watt } from "./power.ts";

describe("wattPerSteradianMeter", () => {
  it("is watts per steradian meter", () => {
    assert<Equals<WattPerSteradianMeter, Divide<Watt, Multiply<Steradian, Meter>>>>();
  });
});
