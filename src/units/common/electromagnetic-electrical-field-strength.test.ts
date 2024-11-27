import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { VoltPerMeter } from "./electromagnetic-electrical-field-strength.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";
import type { Meter } from "./mechanical-length.ts";

describe("voltPerMeter", () => {
  it("is volts per meter", () => {
    assert<Equals<VoltPerMeter, Divide<Volt, Meter>>>();
  });
});
