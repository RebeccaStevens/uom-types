import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type CrackleUnitClass = BaseUnitClass<{ Meter: 1; Second: -5 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Crackle = AbstractUnitFrom<CrackleUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type CrackleUnit<M extends UnitSubvalues> = CrackleUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type CrackleUnitFrom<M extends UnknownUnitMeta> = UnitFrom<CrackleUnitClass, M>;

/**
 * A unit of {@link Crackle}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁵`
 */
export type MeterPerSecondToTheFifth = CrackleUnit<{}>;
