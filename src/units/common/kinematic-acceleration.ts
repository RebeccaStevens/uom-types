import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AccelerationUnitClass = BaseUnitClass<{ Meter: 1; Second: -2 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Acceleration = AbstractUnitFrom<AccelerationUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AccelerationUnit<M extends UnitSubvalues> = AccelerationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AccelerationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AccelerationUnitClass, M>;

/**
 * A unit of {@link Acceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s²`
 */
export type MeterPerSecondSquared = AccelerationUnit<{}>;
