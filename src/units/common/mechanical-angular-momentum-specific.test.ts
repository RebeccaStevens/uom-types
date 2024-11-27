import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Radian } from "./angle-plane.ts";
import type {
  JouleSecondPerRadianPerKilogram,
  NewtonMeterSecondPerRadianPerKilogram,
} from "./mechanical-angular-momentum-specific.ts";
import type { Joule } from "./mechanical-energy.ts";
import type { Newton } from "./mechanical-force.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Gram } from "./mechanical-mass.ts";
import type { Second } from "./time-duration.ts";

describe("jouleSecondPerRadianPerKilogram", () => {
  it("is joules by second per radian per kilogram", () => {
    assert<Equals<JouleSecondPerRadianPerKilogram, Divide<Divide<Multiply<Joule, Second>, Radian>, Kilo<Gram>>>>();
  });
});

describe("newtonMeterSecondPerRadianPerKilogram", () => {
  it("is newton meters by second by radian per kilogram", () => {
    assert<
      Equals<
        NewtonMeterSecondPerRadianPerKilogram,
        Divide<Divide<Multiply<Multiply<Newton, Meter>, Second>, Radian>, Kilo<Gram>>
      >
    >();
  });
});
