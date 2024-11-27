import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { AmperePerMeter } from "./electromagnetic-magnetic-field-strength.ts";
import type { Meter } from "./mechanical-length.ts";

describe("amperePerMeter", () => {
  it("is amperes per meter", () => {
    assert<Equals<AmperePerMeter, Divide<Ampere, Meter>>>();
  });
});
