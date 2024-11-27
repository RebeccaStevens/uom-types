import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricPotentialUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -3;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricPotential = AbstractUnitFrom<ElectricPotentialUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricPotentialUnit<M extends UnitSubvalues> = ElectricPotentialUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricPotentialUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricPotentialUnitClass, M>;

/**
 * A unit of {@link ElectricPotential}.
 *
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Ampere when the power dissipated between the points is one watt.
 *
 * @group Units
 * @category Derived
 * @symbol `V`
 */
export type Volt = ElectricPotentialUnit<{}>;
