import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VelocityUnitClass = BaseUnitClass<{
  Meter: 1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Velocity = AbstractUnitFrom<VelocityUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type VelocityUnit<M extends UnitSubvalues> = VelocityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type VelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<VelocityUnitClass, M>;

/**
 * A unit of {@link Velocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s`
 */
export type MeterPerSecond = VelocityUnit<{}>;
