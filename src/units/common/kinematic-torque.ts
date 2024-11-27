import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type TorqueUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Torque = AbstractUnitFrom<TorqueUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type TorqueUnit<M extends UnitSubvalues> = TorqueUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type TorqueUnitFrom<M extends UnknownUnitMeta> = UnitFrom<TorqueUnitClass, M>;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J/rad`
 */
export type JoulePerRadian = TorqueUnit<{}>;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `N⋅m/rad`
 */
export type NewtonMeterPerRadian = JoulePerRadian;
