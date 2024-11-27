import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Square } from "../modifiers/index.ts";

import type { Radian } from "./angle-plane.ts";
import type { Steradian } from "./angle-solid.ts";

describe("steradian", () => {
  it("is radians squared", () => {
    assert<Equals<Steradian, Square<Radian>>>();
  });
});
