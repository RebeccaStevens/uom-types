import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { PascalSecond } from "./mechanical-dynamic-viscosity.ts";
import type { Pascal } from "./mechanical-pressure.ts";
import type { Second } from "./time-duration.ts";

describe("pascalSecond", () => {
  it("is pascals by seconds", () => {
    assert<Equals<PascalSecond, Multiply<Pascal, Second>>>();
  });
});
