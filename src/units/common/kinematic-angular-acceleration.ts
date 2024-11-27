import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularAccelerationUnitClass = BaseUnitClass<{
  Radian: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularAcceleration = AbstractUnitFrom<AngularAccelerationUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularAccelerationUnit<M extends UnitSubvalues> = AngularAccelerationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularAccelerationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AngularAccelerationUnitClass, M>;

/**
 * A unit of {@link AngularAcceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s²`
 */
export type RadianPerSecondSquared = AngularAccelerationUnit<{}>;
