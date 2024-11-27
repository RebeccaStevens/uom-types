import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { CoulombPerMeter } from "./electromagnetic-electrical-linear-charge-density.ts";
import type { Meter } from "./mechanical-length.ts";

describe("coulombPerMeter", () => {
  it("is coulombs per ampere", () => {
    assert<Equals<CoulombPerMeter, Divide<Coulomb, Meter>>>();
  });
});
