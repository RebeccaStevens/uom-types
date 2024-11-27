import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Multiply } from "../../units-operations/index.ts";
import type { Centi, Cubic, Deci, Milli, Square } from "../modifiers/index.ts";

import type { Meter } from "./mechanical-length.ts";
import type { Liter } from "./mechanical-volume.ts";

describe("cubic Meters", () => {
  it("is meters by meters by meters", () => {
    assert<Equals<Cubic<Meter>, Multiply<Multiply<Meter, Meter>, Meter>>>();
    assert<Equals<Cubic<Meter>, Multiply<Square<Meter>, Meter>>>();
  });
});

describe("cubic Centimeters", () => {
  it("is a milli liter", () => {
    assert<Equals<Cubic<Centi<Meter>>, Milli<Liter>>>();
  });
});

describe("liters", () => {
  it("is milli cubic meter", () => {
    assert<Equals<Liter, Milli<Cubic<Meter>>>>();
    assert<Equals<Liter, Multiply<Multiply<Deci<Meter>, Deci<Meter>>, Deci<Meter>>>>();
  });
});
