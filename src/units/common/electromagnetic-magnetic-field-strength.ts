import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnitClass = BaseUnitClass<{
  Ampere: 1;
  Meter: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFieldStrength = AbstractUnitFrom<MagneticFieldStrengthUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnit<M extends UnitSubvalues> = MagneticFieldStrengthUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticFieldStrengthUnitClass, M>;

/**
 * A unit of {@link MagneticFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m`
 */
export type AmperePerMeter = MagneticFieldStrengthUnit<{}>;
