import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { BaseUnitClass } from "../base-units.ts";

import type { MagneticReluctanceUnitClass } from "./electromagnetic-magnetic-reluctance.ts";

describe("magneticReluctanceUnitClass", () => {
  it("has the right base units", () => {
    assert<
      Equals<
        MagneticReluctanceUnitClass,
        BaseUnitClass<{
          Kilogram: -1;
          Meter: -2;
          Second: 2;
          Ampere: 2;
        }>
      >
    >();
  });
});
