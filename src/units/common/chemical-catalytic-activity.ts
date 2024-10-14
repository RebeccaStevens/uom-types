// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Mole, Second } from ".";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type CatalyticActivityUnitClass = BaseUnitClass<{ Mole: 1; Second: -1 }>;

/**
 * @group Abstract Units
 * @category Chemical
 */
export type CatalyticActivity = AbstractUnitFrom<CatalyticActivityUnitClass>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type CatalyticActivityUnit<M extends UnitSubvalues> = CatalyticActivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type CatalyticActivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<CatalyticActivityUnitClass, M>;

/**
 * A unit of {@link CatalyticActivity}.
 *
 * @group Units
 * @category Derived
 * @category Chemical
 * @symbol `kat`
 */
export type Katal = CatalyticActivityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Katal", () => {
    it("is moles per second", () => {
      assert<Equals<Katal, Divide<Mole, Second>>>();
    });
  });
}
