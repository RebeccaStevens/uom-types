import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";
import type { Ohm } from "./electromagnetic-electrical-resistance.ts";
import type { Weber } from "./electromagnetic-magnetic-flux.ts";
import type { Joule } from "./mechanical-energy.ts";
import type { Watt } from "./power.ts";
import type { Second } from "./time-duration.ts";

describe("volt", () => {
  it("is watts per ampere", () => {
    assert<Equals<Volt, Divide<Watt, Ampere>>>();
  });

  it("is ohms by ampere", () => {
    assert<Equals<Volt, Multiply<Ohm, Ampere>>>();
  });

  it("is joules per coulomb", () => {
    assert<Equals<Volt, Divide<Joule, Coulomb>>>();
  });

  it("is weber per second", () => {
    assert<Equals<Volt, Divide<Weber, Second>>>();
  });
});
