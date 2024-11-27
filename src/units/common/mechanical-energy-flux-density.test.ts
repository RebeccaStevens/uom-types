import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { JoulePerSquareMeterSecond } from "./mechanical-energy-flux-density.ts";
import type { Joule } from "./mechanical-energy.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Second } from "./time-duration.ts";

describe("joulePerSquareMeterSecond", () => {
  it("is joules per (square meters by seconds)", () => {
    assert<Equals<JoulePerSquareMeterSecond, Divide<Joule, Multiply<Square<Meter>, Second>>>>();
  });
});
