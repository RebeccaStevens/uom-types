import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Steradian } from "./angle-solid.ts";
import type { Meter } from "./mechanical-length.ts";
import type { WattPerSteradianSquareMeter } from "./mechanical-radiance.ts";
import type { Watt } from "./power.ts";

describe("wattPerSteradianSquareMeter", () => {
  it("is watts per steradian square meter", () => {
    assert<Equals<WattPerSteradianSquareMeter, Divide<Watt, Multiply<Steradian, Square<Meter>>>>>();
  });
});
