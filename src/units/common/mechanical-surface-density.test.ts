import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Kilo, Square } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { Gram } from "./mechanical-mass.ts";
import type { KilogramPerSquareMeter } from "./mechanical-surface-density.ts";

describe("kilogramPerSquareMeter", () => {
  it("is kilograms per square meter", () => {
    assert<Equals<KilogramPerSquareMeter, Divide<Kilo<Gram>, Square<Meter>>>>();
  });
});
