import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { BaseUnitClass } from "../base-units.ts";

import type { CompressibilityUnitClass } from "./mechanical-compressibility.ts";

describe("compressibilityUnitClass", () => {
  it("has the right base units", () => {
    assert<
      Equals<
        CompressibilityUnitClass,
        BaseUnitClass<{
          Kilogram: -1;
          Meter: 1;
          Second: 2;
        }>
      >
    >();
  });
});
