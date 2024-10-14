// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { Exponent, Unit, UnitClass } from "#uom-types";

import type { Exactify } from "../utils";

type SiUnitKeys = "Second" | "Meter" | "Kilogram" | "Mole" | "Ampere" | "Candela" | "Kelvin" | "Radian";

/**
 * The {@link UnitClass} that is the base of all {@link Unit}s defined by this library.
 *
 * @group Unit Classes
 */
export type BaseUnitClass<T extends Exactify<SiUnitConfig, T>> = UnitClass<T>;

type SiUnitConfig = {
  [K in SiUnitKeys]?: Exponent;
};

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Base Units", () => {
    it("allows valid keys", () => {
      assert<Equals<UnitClass<{}>, BaseUnitClass<{}>>>();
      assert<Equals<UnitClass<{ Second: 1 }>, BaseUnitClass<{ Second: 1 }>>>();
      assert<Equals<UnitClass<{ Meter: 1 }>, BaseUnitClass<{ Meter: 1 }>>>();
      assert<Equals<UnitClass<{ Kilogram: 1 }>, BaseUnitClass<{ Kilogram: 1 }>>>();
      assert<Equals<UnitClass<{ Mole: 1 }>, BaseUnitClass<{ Mole: 1 }>>>();
      assert<Equals<UnitClass<{ Ampere: 1 }>, BaseUnitClass<{ Ampere: 1 }>>>();
      assert<Equals<UnitClass<{ Candela: 1 }>, BaseUnitClass<{ Candela: 1 }>>>();
      assert<Equals<UnitClass<{ Kelvin: 1 }>, BaseUnitClass<{ Kelvin: 1 }>>>();
      assert<Equals<UnitClass<{ Radian: 1 }>, BaseUnitClass<{ Radian: 1 }>>>();
    });

    it("doesn't allows invalid keys", () => {
      // @ts-expect-error -- Invalid unit.
      assert<BaseUnitClass<{ a: 1 }>>();

      // @ts-expect-error -- Invalid unit.
      assert<BaseUnitClass<{ second: 1 }>>();
    });
  });
}
