import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";

import type { Tesla } from "./electromagnetic-magnetic-flux-density.ts";
import type { TeslaMeter } from "./electromagnetic-magnetic-rigidity.ts";
import type { Meter } from "./mechanical-length.ts";

describe("teslaMeter", () => {
  it("is tesla by meter", () => {
    assert<Equals<TeslaMeter, Multiply<Tesla, Meter>>>();
  });
});
