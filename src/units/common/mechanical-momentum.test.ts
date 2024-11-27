import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Newton } from "./mechanical-force.ts";
import type { NewtonSecond } from "./mechanical-momentum.ts";
import type { Second } from "./time-duration.ts";

describe("newtonSecond", () => {
  it("is newtons by seconds", () => {
    assert<Equals<NewtonSecond, Multiply<Newton, Second>>>();
  });
});
