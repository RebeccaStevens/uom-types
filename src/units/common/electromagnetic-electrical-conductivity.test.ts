import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Siemens } from "./electromagnetic-electrical-conductance.ts";
import type { SiemensPerMeter } from "./electromagnetic-electrical-conductivity.ts";
import type { Meter } from "./mechanical-length.ts";

describe("siemensPerMeter", () => {
  it("is siemens per meter", () => {
    assert<Equals<SiemensPerMeter, Divide<Siemens, Meter>>>();
  });
});
