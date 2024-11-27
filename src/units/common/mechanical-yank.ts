import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
}>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Yank = AbstractUnitFrom<YankUnitClass>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnit<M extends UnitSubvalues> = YankUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnitFrom<M extends UnknownUnitMeta> = UnitFrom<YankUnitClass, M>;

/**
 * A unit of {@link Yank}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/s`
 */
export type NewtonPerSecond = YankUnit<{}>;
