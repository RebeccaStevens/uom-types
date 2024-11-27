import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Ohm } from "./electromagnetic-electrical-resistance.ts";
import type { OhmMeter } from "./electromagnetic-resistivity.ts";
import type { Meter } from "./mechanical-length.ts";

describe("ohmMeter", () => {
  it("is ohms by meters", () => {
    assert<Equals<OhmMeter, Multiply<Ohm, Meter>>>();
  });
});
