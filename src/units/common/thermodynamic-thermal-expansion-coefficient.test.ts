import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { BaseUnitClass } from "../base-units.ts";

import type { ThermalExpansionCoefficientUnitClass } from "./thermodynamic-thermal-expansion-coefficient.ts";

describe("thermalExpansionCoefficientUnitClass", () => {
  it("has the right base units", () => {
    assert<
      Equals<
        ThermalExpansionCoefficientUnitClass,
        BaseUnitClass<{
          Kelvin: -1;
        }>
      >
    >();
  });
});
