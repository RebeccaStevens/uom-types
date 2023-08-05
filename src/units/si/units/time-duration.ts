import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Time
 */
export type DurationUnitClass = SiUnitClass<{ Second: 1 }>;

/**
 * @group Abstract Unit
 * @category Time
 */
export type Duration = AbstractUnitFrom<DurationUnitClass>;

/**
 * @group Unit Creators
 * @category Time
 */
export type DurationUnit<M extends UnitSubvalues> = DurationUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Time
 */
export type DurationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  DurationUnitClass,
  M
>;

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
