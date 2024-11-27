import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Watt } from "./power.ts";
import type { Kelvin } from "./thermodynamic-temperature.ts";
import type { KelvinPerWatt } from "./thermodynamic-thermal-resistance.ts";

describe("kelvinPerWatt", () => {
  it("is kelvin per watt", () => {
    assert<Equals<KelvinPerWatt, Divide<Kelvin, Watt>>>();
  });
});
