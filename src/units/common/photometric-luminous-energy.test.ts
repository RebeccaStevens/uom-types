import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { LumenSecond } from "./photometric-luminous-energy.ts";
import type { Lumen } from "./photometric-luminous-flux.ts";
import type { Second } from "./time-duration.ts";

describe("lumenSecond", () => {
  it("is lumens by seconds", () => {
    assert<Equals<LumenSecond, Multiply<Lumen, Second>>>();
  });
});
