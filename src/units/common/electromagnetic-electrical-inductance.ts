import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricInductanceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
  Ampere: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricInductance = AbstractUnitFrom<ElectricInductanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricInductanceUnit<M extends UnitSubvalues> = ElectricInductanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricInductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricInductanceUnitClass, M>;

/**
 * A unit of {@link ElectricInductance}.
 *
 * @group Units
 * @category Derived
 * @symbol `H`
 */
export type Henry = ElectricInductanceUnit<{}>;
