import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Reciprocal } from "../modifiers/index.ts";

import type { Farad } from "./electromagnetic-electrical-capacitance.ts";
import type { Siemens } from "./electromagnetic-electrical-conductance.ts";
import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";
import type { Ohm } from "./electromagnetic-electrical-resistance.ts";
import type { Second } from "./time-duration.ts";

describe("ohm", () => {
  it("is volts per ampere", () => {
    assert<Equals<Ohm, Divide<Volt, Ampere>>>();
  });

  it("is reciprocal of siemens", () => {
    assert<Equals<Ohm, Reciprocal<Siemens>>>();
  });

  it("is seconds per farad", () => {
    assert<Equals<Ohm, Divide<Second, Farad>>>();
  });
});
