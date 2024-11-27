import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Farad } from "./electromagnetic-electrical-capacitance.ts";
import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";

describe("farad", () => {
  it("is coulombs per volt", () => {
    assert<Equals<Farad, Divide<Coulomb, Volt>>>();
  });
});
