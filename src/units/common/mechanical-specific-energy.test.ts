import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Joule } from "./mechanical-energy.ts";
import type { Gram } from "./mechanical-mass.ts";
import type { JoulePerKilogram } from "./mechanical-specific-energy.ts";

describe("joulePerKilogram", () => {
  it("is joules per kilogram", () => {
    assert<Equals<JoulePerKilogram, Divide<Joule, Kilo<Gram>>>>();
  });
});
