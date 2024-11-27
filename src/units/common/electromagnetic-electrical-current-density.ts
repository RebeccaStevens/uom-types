import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitClass = BaseUnitClass<{
  Ampere: 1;
  Meter: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCurrentDensity = AbstractUnitFrom<ElectricCurrentDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnit<M extends UnitSubvalues> = ElectricCurrentDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricCurrentDensityUnitClass, M>;

/**
 * A unit of {@link ElectricCurrentDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m²`
 */
export type AmperePerSquareMeter = ElectricCurrentDensityUnit<{}>;
