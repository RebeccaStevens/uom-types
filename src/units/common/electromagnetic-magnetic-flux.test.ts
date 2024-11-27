import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Henry } from "./electromagnetic-electrical-inductance.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";
import type { Tesla } from "./electromagnetic-magnetic-flux-density.ts";
import type { Weber } from "./electromagnetic-magnetic-flux.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Second } from "./time-duration.ts";

describe("weber", () => {
  it("is volt second", () => {
    assert<Equals<Weber, Multiply<Volt, Second>>>();
  });

  it("is tesla square meters", () => {
    assert<Equals<Weber, Multiply<Tesla, Square<Meter>>>>();
  });

  it("is henry amperes", () => {
    assert<Equals<Weber, Multiply<Henry, Ampere>>>();
  });
});
