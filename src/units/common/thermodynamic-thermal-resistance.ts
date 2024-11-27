import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalResistanceUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Meter: -2;
  Second: 3;
  Kelvin: 1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalResistance = AbstractUnitFrom<ThermalResistanceUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalResistanceUnit<M extends UnitSubvalues> = ThermalResistanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalResistanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ThermalResistanceUnitClass, M>;

/**
 * A unit of {@link ThermalResistance}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/W`
 */
export type KelvinPerWatt = ThermalResistanceUnit<{}>;
