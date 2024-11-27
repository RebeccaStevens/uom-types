import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Farad } from "./electromagnetic-electrical-capacitance.ts";
import type { FaradPerMeter } from "./electromagnetic-permittivity.ts";
import type { Meter } from "./mechanical-length.ts";

describe("faradPerMeter", () => {
  it("is farads per meter", () => {
    assert<Equals<FaradPerMeter, Divide<Farad, Meter>>>();
  });
});
