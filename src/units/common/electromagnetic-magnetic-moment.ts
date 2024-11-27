import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticMomentUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 3;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticMoment = AbstractUnitFrom<MagneticMomentUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticMomentUnit<M extends UnitSubvalues> = MagneticMomentUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticMomentUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticMomentUnitClass, M>;

/**
 * A unit of {@link MagneticMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb⋅m`
 */
export type WeberMeter = MagneticMomentUnit<{}>;
