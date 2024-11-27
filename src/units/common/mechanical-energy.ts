import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Energy = AbstractUnitFrom<EnergyUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyUnit<M extends UnitSubvalues> = EnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnergyUnitClass, M>;

/**
 * A unit of {@link Energy}.
 *
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 meter in the direction of the force.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `J`
 */
export type Joule = EnergyUnit<{}>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅s`
 */
export type WattSecond = Joule;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅min`
 */
export type WattMinute = EnergyUnit<{
  scalar60: 1;
}>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅hr`
 */
export type WattHour = EnergyUnit<{
  scalar60: 2;
}>;
