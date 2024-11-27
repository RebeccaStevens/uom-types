import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { RemoveNeverValues } from "./utils.ts";

describe("removeNeverValues", () => {
  it("removes nevers", () => {
    assert<Equals<{ a: 1; c: "c" }, RemoveNeverValues<{ a: 1; b: never; c: "c" }>>>();
  });
});
