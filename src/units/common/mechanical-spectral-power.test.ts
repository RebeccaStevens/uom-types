import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { WattPerMeter } from "./mechanical-spectral-power.ts";
import type { Watt } from "./power.ts";

describe("wattPerMeter", () => {
  it("is watts per meter", () => {
    assert<Equals<WattPerMeter, Divide<Watt, Meter>>>();
  });
});
