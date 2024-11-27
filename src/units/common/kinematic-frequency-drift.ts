import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type FrequencyDriftUnitClass = BaseUnitClass<{ Second: -2 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type FrequencyDrift = AbstractUnitFrom<FrequencyDriftUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type FrequencyDriftUnit<M extends UnitSubvalues> = FrequencyDriftUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type FrequencyDriftUnitFrom<M extends UnknownUnitMeta> = UnitFrom<FrequencyDriftUnitClass, M>;

/**
 * A unit of {@link FrequencyDrift} equal to one hertz per second.
 *
 * @group Units
 * @category Kinematic
 * @symbol `Hz/s`
 */
export type HertzPerSecond = FrequencyDriftUnit<{}>;
