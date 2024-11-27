import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Joule } from "./mechanical-energy.ts";
import type { JoulePerKelvin } from "./thermodynamic-entropy.ts";
import type { Kelvin } from "./thermodynamic-temperature.ts";

describe("joulePerKelvin", () => {
  it("is joules per kelvin", () => {
    assert<Equals<JoulePerKelvin, Divide<Joule, Kelvin>>>();
  });
});
