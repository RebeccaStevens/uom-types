import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { CoulombPerKilogram } from "./electromagnetic-exposure.ts";
import type { Gram } from "./mechanical-mass.ts";

describe("coulombPerKilogram", () => {
  it("is coulombs per kilogram", () => {
    assert<Equals<CoulombPerKilogram, Divide<Coulomb, Kilo<Gram>>>>();
  });
});
