import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpecificAngularMomentumUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpecificAngularMomentum = AbstractUnitFrom<SpecificAngularMomentumUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificAngularMomentumUnit<M extends UnitSubvalues> = SpecificAngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificAngularMomentumUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpecificAngularMomentumUnitClass, M>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J⋅s/rad/kg`
 */
export type JouleSecondPerRadianPerKilogram = SpecificAngularMomentumUnit<{}>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m⋅s/rad/kg`
 */
export type NewtonMeterSecondPerRadianPerKilogram = JouleSecondPerRadianPerKilogram;
