import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { BaseUnitClass } from "../base-units.ts";
import type { Reciprocal } from "../modifiers/index.ts";

import type {
  FrequencyUnitClass,
  Hertz,
  PerDay,
  PerHour,
  PerMinute,
  PerSecond,
  PerWeek,
  PerYear,
} from "./kinematic-frequency.ts";
import type { Day, Hour, Minute, Second, Week, Year } from "./time-duration.ts";

describe("frequency", () => {
  it("is reciprocal of time", () => {
    assert<Equals<FrequencyUnitClass, BaseUnitClass<{ Second: -1 }>>>();
    assert<Equals<Hertz, Reciprocal<Second>>>();
    assert<Equals<PerSecond, Reciprocal<Second>>>();
    assert<Equals<PerMinute, Reciprocal<Minute>>>();
    assert<Equals<PerHour, Reciprocal<Hour>>>();
    assert<Equals<PerDay, Reciprocal<Day>>>();
    assert<Equals<PerWeek, Reciprocal<Week>>>();
    assert<Equals<PerYear, Reciprocal<Year>>>();
  });
});
