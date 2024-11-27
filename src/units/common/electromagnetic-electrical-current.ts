import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricCurrentUnitClass = BaseUnitClass<{
  Ampere: 1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCurrent = AbstractUnitFrom<ElectricCurrentUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentUnit<M extends UnitSubvalues> = ElectricCurrentUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricCurrentUnitClass, M>;

/**
 * A unit of {@link ElectricCurrent}.
 *
 * @group Units
 * @category Base
 * @symbol `A`
 */
export type Ampere = ElectricCurrentUnit<{}>;
