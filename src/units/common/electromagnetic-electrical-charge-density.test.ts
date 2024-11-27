import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { CoulombPerCubicMeter } from "./electromagnetic-electrical-charge-density.ts";
import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { Meter } from "./mechanical-length.ts";

describe("coulombPerCubicMeter", () => {
  it("is coulombs per cubic meter", () => {
    assert<Equals<CoulombPerCubicMeter, Divide<Coulomb, Cubic<Meter>>>>();
  });
});
