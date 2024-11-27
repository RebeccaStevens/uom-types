import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Newton } from "./mechanical-force.ts";
import type { Meter } from "./mechanical-length.ts";
import type { Pascal } from "./mechanical-pressure.ts";

describe("pascal", () => {
  it("is newtons per square meter", () => {
    assert<Equals<Pascal, Divide<Newton, Square<Meter>>>>();
  });
});
