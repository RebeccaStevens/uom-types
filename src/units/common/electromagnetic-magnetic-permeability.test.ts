import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Henry } from "./electromagnetic-electrical-inductance.ts";
import type { HenryPerMeter } from "./electromagnetic-magnetic-permeability.ts";
import type { Meter } from "./mechanical-length.ts";

describe("henryPerMeter", () => {
  it("is henry per meter", () => {
    assert<Equals<HenryPerMeter, Divide<Henry, Meter>>>();
  });
});
