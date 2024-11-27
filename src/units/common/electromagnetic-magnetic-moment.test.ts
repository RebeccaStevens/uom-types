import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Weber } from "./electromagnetic-magnetic-flux.ts";
import type { WeberMeter } from "./electromagnetic-magnetic-moment.ts";
import type { Meter } from "./mechanical-length.ts";

describe("weberMeter", () => {
  it("is weber meters", () => {
    assert<Equals<WeberMeter, Multiply<Weber, Meter>>>();
  });
});
