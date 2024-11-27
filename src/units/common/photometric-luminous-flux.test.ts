import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Steradian } from "./angle-solid.ts";
import type { Lumen } from "./photometric-luminous-flux.ts";
import type { Candela } from "./photometric-luminous-intensity.ts";

describe("lumen", () => {
  it("is candelas by steradians", () => {
    assert<Equals<Lumen, Multiply<Candela, Steradian>>>();
  });
});
