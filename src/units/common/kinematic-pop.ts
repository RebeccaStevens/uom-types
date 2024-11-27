import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type PopUnitClass = BaseUnitClass<{ Meter: 1; Second: -6 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Pop = AbstractUnitFrom<PopUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type PopUnit<M extends UnitSubvalues> = PopUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type PopUnitFrom<M extends UnknownUnitMeta> = UnitFrom<PopUnitClass, M>;

/**
 * A unit of {@link Pop}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁶`
 */
export type MeterPerSecondToTheSixth = PopUnit<{}>;
