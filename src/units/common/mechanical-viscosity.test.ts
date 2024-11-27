import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { SquareMeterPerSecond } from "./mechanical-viscosity.ts";
import type { Second } from "./time-duration.ts";

describe("squareMeterPerSecond", () => {
  it("is square meters per second", () => {
    assert<Equals<SquareMeterPerSecond, Divide<Square<Meter>, Second>>>();
  });
});
