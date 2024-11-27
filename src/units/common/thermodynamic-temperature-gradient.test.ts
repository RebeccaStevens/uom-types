import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { KelvinPerMeter } from "./thermodynamic-temperature-gradient.ts";
import type { Kelvin } from "./thermodynamic-temperature.ts";

describe("kelvinPerMeter", () => {
  it("is kelvin per meter", () => {
    assert<Equals<KelvinPerMeter, Divide<Kelvin, Meter>>>();
  });
});
