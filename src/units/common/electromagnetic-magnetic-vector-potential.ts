// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Meter, Weber } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticVectorPotential = AbstractUnitFrom<MagneticVectorPotentialUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnit<M extends UnitSubvalues> = MagneticVectorPotentialUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticVectorPotentialUnitClass, M>;

/**
 * A unit of {@link MagneticVectorPotential}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb/m`
 */
export type WeberPerMeter = MagneticVectorPotentialUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WeberPerMeter", () => {
    it("is webers per meter", () => {
      assert<Equals<WeberPerMeter, Divide<Weber, Meter>>>();
    });
  });
}
