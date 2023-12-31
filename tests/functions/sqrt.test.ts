import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { sqrt } from "#uom-types/functions";

test("number", () => {
  expect(sqrt(4)).equals(2);
});

test("unit", () => {
  const a = 4 as Unit<{ a: -2; b: 4 }>;
  const expected = 2 as Unit<{ a: -1; b: 2 }>;
  const actual: typeof expected = sqrt(a);
  expect(actual).equals(expected);
});
