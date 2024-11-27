import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { JoulePerTesla } from "./electromagnetic-magnetic-dipole-moment.ts";
import type { Tesla } from "./electromagnetic-magnetic-flux-density.ts";
import type { Joule } from "./mechanical-energy.ts";

describe("joulePerTesla", () => {
  it("is joules per tesla", () => {
    assert<Equals<JoulePerTesla, Divide<Joule, Tesla>>>();
  });
});
