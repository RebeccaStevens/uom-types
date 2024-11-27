import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";
import type { Joule, WattHour, WattMinute, WattSecond } from "./mechanical-energy.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Pascal } from "./mechanical-pressure.ts";
import type { Watt } from "./power.ts";
import type { Hour, Minute, Second } from "./time-duration.ts";

describe("joule", () => {
  it("is watt seconds", () => {
    assert<Equals<Joule, WattSecond>>();
    assert<Equals<WattSecond, Multiply<Watt, Second>>>();
  });
  it("is pascal cubic meters", () => {
    assert<Equals<Joule, Multiply<Pascal, Cubic<Meter>>>>();
  });
  it("is coulomb volts", () => {
    assert<Equals<Joule, Multiply<Coulomb, Volt>>>();
  });
});

describe("other energy units", () => {
  it("is correct", () => {
    assert<Equals<WattMinute, Multiply<Watt, Minute>>>();
    assert<Equals<WattHour, Multiply<Watt, Hour>>>();
  });
});
