import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { JoulePerCubicMeter } from "./mechanical-energy-density.ts";
import type { Joule } from "./mechanical-energy.ts";
import type { Meter } from "./mechanical-length.ts";

describe("joulePerCubicMeter", () => {
  it("is joules per cubic meter", () => {
    assert<Equals<JoulePerCubicMeter, Divide<Joule, Cubic<Meter>>>>();
  });
});
