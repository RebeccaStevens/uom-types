import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricResistanceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -3;
  Ampere: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricResistance = AbstractUnitFrom<ElectricResistanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricResistanceUnit<M extends UnitSubvalues> = ElectricResistanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricResistanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricResistanceUnitClass, M>;

/**
 * A unit of {@link ElectricResistance}.
 *
 * One Ohm is equal to the resistance of a conductor in which a current of one Ampere is produced
 * by a potential of one volt across its terminals.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ω`
 */
export type Ohm = ElectricResistanceUnit<{}>;
