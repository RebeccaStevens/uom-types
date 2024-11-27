import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Newton } from "./mechanical-force.ts";
import type { Meter } from "./mechanical-length.ts";
import type { NewtonMeter } from "./mechanical-work.ts";

describe("newtonMeter", () => {
  it("is newtons by meters", () => {
    assert<Equals<NewtonMeter, Multiply<Newton, Meter>>>();
  });
});
