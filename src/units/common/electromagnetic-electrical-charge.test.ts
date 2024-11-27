import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Second } from "./time-duration.ts";

describe("coulomb", () => {
  it("is amperes by seconds", () => {
    assert<Equals<Coulomb, Multiply<Ampere, Second>>>();
  });
});
