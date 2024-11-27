import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalTransmittanceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
  Kelvin: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalTransmittance = AbstractUnitFrom<ThermalTransmittanceUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalTransmittanceUnit<M extends UnitSubvalues> = ThermalTransmittanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalTransmittanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ThermalTransmittanceUnitClass, M>;

/**
 * A unit of {@link ThermalTransmittance}.
 *
 * @group Units
 * @category Thermodynamic
 */
export type WattPerSquareMeterPerKelvin = ThermalTransmittanceUnit<{}>;
