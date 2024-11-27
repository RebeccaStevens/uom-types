import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 * @category Mechanical
 */
export type PowerUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 * @category Mechanical
 */
export type Power = AbstractUnitFrom<PowerUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 * @category Mechanical
 */
export type PowerUnit<M extends UnitSubvalues> = PowerUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 * @category Mechanical
 */
export type PowerUnitFrom<M extends UnknownUnitMeta> = UnitFrom<PowerUnitClass, M>;

/**
 * A unit of {@link Power}.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @category Mechanical
 * @symbol `W`
 */
export type Watt = PowerUnit<{}>;
