import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { KilogramPerMeter } from "./mechanical-linear-mass-density.ts";
import type { Gram } from "./mechanical-mass.ts";

describe("kilogramPerMeter", () => {
  it("is kilograms per meter", () => {
    assert<Equals<KilogramPerMeter, Divide<Kilo<Gram>, Meter>>>();
  });
});
