import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnitClass = BaseUnitClass<{
  Ampere: 1;
  Second: 1;
  Meter: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensity = AbstractUnitFrom<ElectricLinearChargeDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnit<M extends UnitSubvalues> = ElectricLinearChargeDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricLinearChargeDensityUnitClass,
  M
>;

/**
 * A unit of {@link ElectricLinearChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m`
 */
export type CoulombPerMeter = ElectricLinearChargeDensityUnit<{}>;
