import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Meter: -1;
  Second: 2;
  Ampere: 2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticSusceptibility = AbstractUnitFrom<MagneticSusceptibilityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnit<M extends UnitSubvalues> = MagneticSusceptibilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticSusceptibilityUnitClass, M>;

/**
 * A unit of {@link MagneticSusceptibility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m/H`
 */
export type MeterPerHenry = MagneticSusceptibilityUnit<{}>;
