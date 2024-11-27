import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitClass = BaseUnitClass<{
  Ampere: -1;
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFluxDensity = AbstractUnitFrom<MagneticFluxDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnit<M extends UnitSubvalues> = MagneticFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticFluxDensityUnitClass, M>;

/**
 * A unit of {@link MagneticFluxDensity}.
 *
 * One Tesla is equal equal to one weber per square meter.
 *
 * @group Units
 * @category Derived
 * @symbol `T`
 */
export type Tesla = MagneticFluxDensityUnit<{}>;
