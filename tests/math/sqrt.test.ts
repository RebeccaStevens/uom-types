import { expect, it } from "vitest";

import { type Unit, sqrt } from "../../src";

it("number", () => {
  expect(sqrt(4)).equals(2);
});

it("unit", () => {
  const a = 4 as Unit<{ a: -2; b: 4 }>;
  const expected = 2 as Unit<{ a: -1; b: 2 }>;
  const actual: typeof expected = sqrt(a);
  expect(actual).equals(expected);
});
