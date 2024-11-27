import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { AmperePerSquareMeter } from "./electromagnetic-electrical-current-density.ts";
import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Meter } from "./mechanical-length.ts";

describe("amperePerSquareMeter", () => {
  it("is amperes per square meter", () => {
    assert<Equals<AmperePerSquareMeter, Divide<Ampere, Square<Meter>>>>();
  });
});
