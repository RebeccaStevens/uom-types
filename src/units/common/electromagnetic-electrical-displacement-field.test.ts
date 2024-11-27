import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";
import type { Square } from "../modifiers/index.ts";

import type { Coulomb } from "./electromagnetic-electrical-charge.ts";
import type { CoulombPerSquareMeter } from "./electromagnetic-electrical-displacement-field.ts";
import type { Meter } from "./mechanical-length.ts";

describe("coulombPerSquareMeter", () => {
  it("is coulombs per square meter", () => {
    assert<Equals<CoulombPerSquareMeter, Divide<Coulomb, Square<Meter>>>>();
  });
});
