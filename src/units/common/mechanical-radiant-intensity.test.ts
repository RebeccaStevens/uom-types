import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Steradian } from "./angle-solid.ts";
import type { WattPerSteradian } from "./mechanical-radiant-intensity.ts";
import type { Watt } from "./power.ts";

describe("wattPerSteradian", () => {
  it("is watts per steradian", () => {
    assert<Equals<WattPerSteradian, Divide<Watt, Steradian>>>();
  });
});
