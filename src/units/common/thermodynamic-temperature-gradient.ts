import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type TemperatureGradientUnitClass = BaseUnitClass<{
  Kelvin: 1;
  Meter: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type TemperatureGradient = AbstractUnitFrom<TemperatureGradientUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureGradientUnit<M extends UnitSubvalues> = TemperatureGradientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureGradientUnitFrom<M extends UnknownUnitMeta> = UnitFrom<TemperatureGradientUnitClass, M>;

/**
 * A unit of {@link TemperatureGradient}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/m`
 */
export type KelvinPerMeter = TemperatureGradientUnit<{}>;
