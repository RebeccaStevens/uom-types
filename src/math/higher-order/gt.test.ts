import { expect, it } from "vitest";

import { type Unit, gt } from "../../index.ts";

it("number", () => {
  expect(gt(4)(4)).equals(false);
  expect(gt(3)(4)).equals(true);
  expect(gt(4)(3)).equals(false);
});

it("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(gt(a)(a)).equals(false);
  expect(gt(b)(b)).equals(false);
  expect(gt(b)(a)).equals(true);
  expect(gt(a)(b)).equals(false);
});
