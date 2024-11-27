import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { JouleSecond } from "./mechanical-action.ts";
import type { Joule } from "./mechanical-energy.ts";
import type { Second } from "./time-duration.ts";

describe("grayPerSecond", () => {
  it("is joules per second", () => {
    assert<Equals<JouleSecond, Multiply<Joule, Second>>>();
  });
});
