import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Mole } from "./chemical-amount-of-substance.ts";
import type { Katal } from "./chemical-catalytic-activity.ts";
import type { Second } from "./time-duration.ts";

describe("katal", () => {
  it("is moles per second", () => {
    assert<Equals<Katal, Divide<Mole, Second>>>();
  });
});
