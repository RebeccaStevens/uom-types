import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { KilogramPerSecond } from "./mechanical-mass-flow-rate.ts";
import type { Gram } from "./mechanical-mass.ts";
import type { Second } from "./time-duration.ts";

describe("kilogramPerSecond", () => {
  it("is kilograms per second", () => {
    assert<Equals<KilogramPerSecond, Divide<Kilo<Gram>, Second>>>();
  });
});
