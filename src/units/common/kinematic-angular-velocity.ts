import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularVelocityUnitClass = BaseUnitClass<{
  Radian: 1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularVelocity = AbstractUnitFrom<AngularVelocityUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularVelocityUnit<M extends UnitSubvalues> = AngularVelocityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularVelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AngularVelocityUnitClass, M>;

/**
 * A unit of {@link AngularVelocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s`
 */
export type RadianPerSecond = AngularVelocityUnit<{}>;
