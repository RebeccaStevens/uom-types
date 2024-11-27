import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { Watt } from "./power.ts";
import type { Kelvin } from "./thermodynamic-temperature.ts";
import type { WattPerSquareMeterPerKelvin } from "./thermodynamic-thermal-transmittance.ts";

describe("wattPerSquareMeterPerKelvin", () => {
  it("is watt per square meter per kelvin", () => {
    assert<Equals<WattPerSquareMeterPerKelvin, Divide<Divide<Watt, Square<Meter>>, Kelvin>>>();
  });
});
