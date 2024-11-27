import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Joule } from "./mechanical-energy.ts";
import type { Meter } from "./mechanical-length.ts";
import type { JoulePerSquareMeter } from "./mechanical-radiant-exposure.ts";

describe("joulePerSquareMeter", () => {
  it("is joules per square meter", () => {
    assert<Equals<JoulePerSquareMeter, Divide<Joule, Square<Meter>>>>();
  });
});
