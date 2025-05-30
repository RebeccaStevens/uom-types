import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricFieldStrength = AbstractUnitFrom<ElectricFieldStrengthUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnit<M extends UnitSubvalues> = ElectricFieldStrengthUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricFieldStrengthUnitClass, M>;

/**
 * A unit of {@link ElectricFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `V/m`
 */
export type VoltPerMeter = ElectricFieldStrengthUnit<{}>;
