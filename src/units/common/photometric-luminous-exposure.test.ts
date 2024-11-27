import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Lux } from "./photometric-luminance.ts";
import type { LuxSecond } from "./photometric-luminous-exposure.ts";
import type { Second } from "./time-duration.ts";

describe("luxSecond", () => {
  it("is lux by seconds", () => {
    assert<Equals<LuxSecond, Multiply<Lux, Second>>>();
  });
});
