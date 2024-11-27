import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularMomentumUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularMomentum = AbstractUnitFrom<AngularMomentumUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularMomentumUnit<M extends UnitSubvalues> = AngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularMomentumUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AngularMomentumUnitClass, M>;

/**
 * A unit of {@link AngularMomentum}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J⋅s/rad`
 */
export type JouleSecondPerRadian = AngularMomentumUnit<{}>;
