import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Kilo, Square } from "../modifiers/index.ts";

import type { Steradian } from "./angle-solid.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Gram } from "./mechanical-mass.ts";
import type { KilogramSquareMeterPerSteradian } from "./mechanical-moment-of-inertia.ts";

describe("kilogramSquareMeterPerSteradian", () => {
  it("is kilograms by square meters per steradian", () => {
    assert<Equals<KilogramSquareMeterPerSteradian, Divide<Multiply<Kilo<Gram>, Square<Meter>>, Steradian>>>();
  });
});
