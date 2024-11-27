import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Cubic, Kilo } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { Gram } from "./mechanical-mass.ts";
import type { CubicMeterPerKilogram } from "./thermodynamic-specific-volume.ts";

describe("cubicMeterPerKilogram", () => {
  it("is cubic meter per kilogram", () => {
    assert<Equals<CubicMeterPerKilogram, Divide<Cubic<Meter>, Kilo<Gram>>>>();
  });
});
