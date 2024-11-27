import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { Divide } from "../../units-operations/index.ts";

import type { Siemens } from "./electromagnetic-electrical-conductance.ts";
import type { Ampere } from "./electromagnetic-electrical-current.ts";
import type { Volt } from "./electromagnetic-electrical-potential.ts";

describe("siemens", () => {
  it("is amperes per volt", () => {
    assert<Equals<Siemens, Divide<Ampere, Volt>>>();
  });
});
