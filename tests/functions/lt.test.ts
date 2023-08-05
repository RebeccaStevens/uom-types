import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { lt } from "#uom-types/functions";

test("number", () => {
  expect(lt(4, 4)).equals(false);
  expect(lt(4, 3)).equals(false);
  expect(lt(3, 4)).equals(true);
});

test("unit", () => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  expect(lt(a, a)).equals(false);
  expect(lt(b, b)).equals(false);
  expect(lt(a, b)).equals(false);
  expect(lt(b, a)).equals(true);
});
