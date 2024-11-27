import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type SnapUnitClass = BaseUnitClass<{ Meter: 1; Second: -4 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Snap = AbstractUnitFrom<SnapUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type SnapUnit<M extends UnitSubvalues> = SnapUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type SnapUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SnapUnitClass, M>;

/**
 * A unit of {@link Snap}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁴`
 */
export type MeterPerSecondToTheFourth = SnapUnit<{}>;
