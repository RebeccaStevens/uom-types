import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { BaseUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Time
 */
export type DurationUnitClass = BaseUnitClass<{ Second: 1 }>;

/**
 * @group Abstract Units
 * @category Time
 */
export type Duration = AbstractUnitFrom<DurationUnitClass>;

/**
 * @group Unit Generators
 * @category Time
 */
export type DurationUnit<M extends UnitSubvalues> = DurationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Time
 */
export type DurationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<DurationUnitClass, M>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Base
 * @category Time
 * @symbol `s`
 */
export type Second = DurationUnit<{}>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `min`
 */
export type Minute = DurationUnit<{ scalar60: 1 }>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `hr`
 */
export type Hour = DurationUnit<{ scalar60: 2 }>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `day`
 */
export type Day = DurationUnit<{ scalar60: 2; scalar24: 1 }>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `wk`
 */
export type Week = DurationUnit<{
  scalar60: 2;
  scalar24: 1;
  scalar7: 1;
}>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `yr`
 */
export type Year = DurationUnit<{
  scalar60: 2;
  scalar24: 1;
  scalarDayInYear: 1;
}>;
