import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";
import type { Joule } from "./mechanical-energy.ts";
import type { Watt } from "./power.ts";
import type { Second } from "./time-duration.ts";

describe("watt", () => {
  it("is joules per second", () => {
    assert<Equals<Watt, Divide<Joule, Second>>>();
  });

  it("is ampere by volts", () => {
    assert<Equals<Watt, Multiply<Ampere, Volt>>>();
  });
});
