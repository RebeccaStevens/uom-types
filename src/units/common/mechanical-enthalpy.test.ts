import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Joule } from "./mechanical-energy.ts";
import type { Gray } from "./mechanical-enthalpy.ts";
import type { Gram } from "./mechanical-mass.ts";

describe("gray", () => {
  it("is joules per kilogram", () => {
    assert<Equals<Gray, Divide<Joule, Kilo<Gram>>>>();
  });
});
