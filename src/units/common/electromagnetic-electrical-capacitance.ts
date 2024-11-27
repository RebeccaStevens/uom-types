import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricCapacitanceUnitClass = BaseUnitClass<{
  Ampere: 2;
  Second: 4;
  Kilogram: -1;
  Meter: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCapacitance = AbstractUnitFrom<ElectricCapacitanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCapacitanceUnit<M extends UnitSubvalues> = ElectricCapacitanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCapacitanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricCapacitanceUnitClass, M>;

/**
 * A unit of {@link ElectricCapacitance}.
 *
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @symbol `F`
 */
export type Farad = ElectricCapacitanceUnit<{}>;
