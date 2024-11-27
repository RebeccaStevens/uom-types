import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { WattPerSquareMeter } from "./mechanical-intensity.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Watt } from "./power.ts";

describe("wattPerSquareMeter", () => {
  it("is watts per square meter", () => {
    assert<Equals<WattPerSquareMeter, Divide<Watt, Square<Meter>>>>();
  });
});
