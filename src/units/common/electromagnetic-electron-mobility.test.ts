import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Volt } from "./electromagnetic-electrical-potential.ts";
import type { SquareMeterPerVoltSecond } from "./electromagnetic-electron-mobility.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Second } from "./time-duration.ts";

describe("squareMeterPerVoltSecond", () => {
  it("is square meters per volt second", () => {
    assert<Equals<SquareMeterPerVoltSecond, Divide<Square<Meter>, Multiply<Volt, Second>>>>();
  });
});
