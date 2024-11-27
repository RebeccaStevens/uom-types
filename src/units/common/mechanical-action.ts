import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type ActionUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Action = AbstractUnitFrom<ActionUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ActionUnit<M extends UnitSubvalues> = ActionUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ActionUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ActionUnitClass, M>;

/**
 * A unit of {@link Action}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Js`
 */
export type JouleSecond = ActionUnit<{}>;
