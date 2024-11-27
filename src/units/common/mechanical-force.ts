import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type ForceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Force = AbstractUnitFrom<ForceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ForceUnit<M extends UnitSubvalues> = ForceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ForceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ForceUnitClass, M>;

/**
 * A unit of {@link Force}.
 *
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 meter per second per second.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `N`
 */
export type Newton = ForceUnit<{}>;
