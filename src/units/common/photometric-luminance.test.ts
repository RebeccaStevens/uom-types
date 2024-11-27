import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { CandelaPerSquareMeter, Lux } from "./photometric-luminance.ts";
import type { Candela } from "./photometric-luminous-intensity.ts";

describe("lux", () => {
  it("is CandelaPerSquareMeter", () => {
    assert<Equals<Lux, CandelaPerSquareMeter>>();
  });

  it("is candela per square meter", () => {
    assert<Equals<Lux, Divide<Candela, Square<Meter>>>>();
  });
});
