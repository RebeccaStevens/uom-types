import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricConductanceUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Meter: -2;
  Second: 3;
  Ampere: 2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricConductance = AbstractUnitFrom<ElectricConductanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricConductanceUnit<M extends UnitSubvalues> = ElectricConductanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricConductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricConductanceUnitClass, M>;

/**
 * A unit of {@link ElectricConductance}.
 *
 * One Siemens is equal to one ampere per volt.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S`
 */
export type Siemens = ElectricConductanceUnit<{}>;
