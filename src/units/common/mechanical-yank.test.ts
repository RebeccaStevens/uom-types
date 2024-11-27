import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Newton } from "./mechanical-force.ts";
import type { NewtonPerSecond } from "./mechanical-yank.ts";
import type { Second } from "./time-duration.ts";

describe("newtonPerSecond", () => {
  it("is newtons per second", () => {
    assert<Equals<NewtonPerSecond, Divide<Newton, Second>>>();
  });
});
