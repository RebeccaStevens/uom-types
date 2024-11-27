import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { LumenPerWatt } from "./photometric-luminous-efficacy.ts";
import type { Lumen } from "./photometric-luminous-flux.ts";
import type { Watt } from "./power.ts";

describe("lumenPerWatt", () => {
  it("is lumens per watt", () => {
    assert<Equals<LumenPerWatt, Divide<Lumen, Watt>>>();
  });
});
