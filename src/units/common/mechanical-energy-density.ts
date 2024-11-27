import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyDensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type EnergyDensity = AbstractUnitFrom<EnergyDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyDensityUnit<M extends UnitSubvalues> = EnergyDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnergyDensityUnitClass, M>;

/**
 * A unit of {@link EnergyDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m³`
 */
export type JoulePerCubicMeter = EnergyDensityUnit<{}>;
