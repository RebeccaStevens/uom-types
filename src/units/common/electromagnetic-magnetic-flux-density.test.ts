import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Tesla } from "./electromagnetic-magnetic-flux-density.ts";
import type { Weber } from "./electromagnetic-magnetic-flux.ts";
import type { Meter } from "./mechanical-length.ts";

describe("tesla", () => {
  it("is weber per square meter", () => {
    assert<Equals<Tesla, Divide<Weber, Square<Meter>>>>();
  });
});
