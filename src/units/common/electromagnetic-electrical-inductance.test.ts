import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";

import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Henry } from "./electromagnetic-electrical-inductance.ts";
import type { Ohm } from "./electromagnetic-electrical-resistance.ts";
import type { Weber } from "./electromagnetic-magnetic-flux.ts";
import type { Second } from "./time-duration.ts";

describe("henry", () => {
  it("is webers per ampere", () => {
    assert<Equals<Henry, Divide<Weber, Ampere>>>();
  });

  it("is ohms per seconds", () => {
    assert<Equals<Henry, Multiply<Ohm, Second>>>();
  });
});
