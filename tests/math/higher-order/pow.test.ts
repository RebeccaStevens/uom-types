import { expect, it } from "vitest";

import { type Unit, pow } from "../../../src/index.ts";

it("numbers", () => {
  expect(pow(-1)(4)).equals(0.25);
  expect(pow(0)(4)).equals(1);
  expect(pow(0.5)(4)).equals(2);
  expect(pow(1)(4)).equals(4);
  expect(pow(2)(4)).equals(16);
  expect(pow(3)(4)).equals(64);
  expect(pow(5)(4)).equals(1024);
});

it("unit by number", () => {
  const a = 4 as Unit<{ a: -2; b: 2 }>;

  const expected1 = 0.25 as Unit<{ a: 2; b: -2 }>;
  const actual1: typeof expected1 = pow(-1)(a);
  expect(actual1).equals(expected1);

  const expected2 = 1 as Unit<{}>;
  const actual2: typeof expected2 = pow(0)(a);
  expect(actual2).equals(expected2);

  const expected3 = 2 as Unit<{ a: -1; b: 1 }>;
  const actual3: typeof expected3 = pow(0.5)(a);
  expect(actual3).equals(expected3);

  const expected4 = 4 as Unit<{ a: -2; b: 2 }>;
  const actual4: typeof expected4 = pow(1)(a);
  expect(actual4).equals(expected4);

  const expected5 = 16 as Unit<{ a: -4; b: 4 }>;
  const actual5: typeof expected5 = pow(2)(a);
  expect(actual5).equals(expected5);

  const expected6 = 64 as Unit<{ a: -6; b: 6 }>;
  const actual6: typeof expected6 = pow(3)(a);
  expect(actual6).equals(expected6);
});
