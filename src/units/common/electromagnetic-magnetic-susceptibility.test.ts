import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Henry } from "./electromagnetic-electrical-inductance.ts";
import type { MeterPerHenry } from "./electromagnetic-magnetic-susceptibility.ts";
import type { Meter } from "./mechanical-length.ts";

describe("meterPerHenry", () => {
  it("is meters per henry", () => {
    assert<Equals<MeterPerHenry, Divide<Meter, Henry>>>();
  });
});
