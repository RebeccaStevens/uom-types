import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { Watt } from "./power.ts";
import type { Kelvin } from "./thermodynamic-temperature.ts";
import type { WattPerMeterKelvin } from "./thermodynamic-thermal-conductivity.ts";

describe("wattPerMeterKelvin", () => {
  it("is watts per meter kelvin", () => {
    assert<Equals<WattPerMeterKelvin, Divide<Watt, Multiply<Meter, Kelvin>>>>();
  });
});
