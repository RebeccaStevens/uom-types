import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide, Multiply } from "../../units-operations/index.ts";
import type { Cubic, Square } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";

describe("squareMeter", () => {
  it("is meters by meters", () => {
    assert<Equals<Square<Meter>, Multiply<Meter, Meter>>>();
  });

  it("is cubic meters per meter", () => {
    assert<Equals<Square<Meter>, Divide<Cubic<Meter>, Meter>>>();
  });
});
