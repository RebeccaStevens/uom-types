import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { Mole } from "./chemical-amount-of-substance.ts";
import type { MolePerCubicMeter, MolePerLiter } from "./chemical-concentration.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Liter } from "./mechanical-volume.ts";

describe("molePerCubicMeter", () => {
  it("is moles per cubic meter", () => {
    assert<Equals<MolePerCubicMeter, Divide<Mole, Cubic<Meter>>>>();
  });
});

describe("molePerLiter", () => {
  it("is moles per liter", () => {
    assert<Equals<MolePerLiter, Divide<Mole, Liter>>>();
  });
});
