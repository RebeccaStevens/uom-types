import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Joule } from "./mechanical-energy.ts";
import type { Gram } from "./mechanical-mass.ts";
import type { JoulePerKilogramKelvin } from "./thermodynamic-specific-entropy.ts";
import type { Kelvin } from "./thermodynamic-temperature.ts";

describe("joulePerKilogramKelvin", () => {
  it("is joules per kelvin kilogram", () => {
    assert<Equals<JoulePerKilogramKelvin, Divide<Joule, Multiply<Kelvin, Kilo<Gram>>>>>();
  });
});
