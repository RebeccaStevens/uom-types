import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Weber } from "./electromagnetic-magnetic-flux.ts";
import type { WeberPerMeter } from "./electromagnetic-magnetic-vector-potential.ts";
import type { Meter } from "./mechanical-length.ts";

describe("weberPerMeter", () => {
  it("is webers per meter", () => {
    assert<Equals<WeberPerMeter, Divide<Weber, Meter>>>();
  });
});
