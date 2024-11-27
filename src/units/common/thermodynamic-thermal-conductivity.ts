import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalConductivityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
  Kelvin: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalConductivity = AbstractUnitFrom<ThermalConductivityUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalConductivityUnit<M extends UnitSubvalues> = ThermalConductivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalConductivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ThermalConductivityUnitClass, M>;

/**
 * A unit of {@link ThermalConductivity}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `W/(m⋅K)`
 */
export type WattPerMeterKelvin = ThermalConductivityUnit<{}>;
