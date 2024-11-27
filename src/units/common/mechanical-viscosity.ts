import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type KinematicViscosityUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type KinematicViscosity = AbstractUnitFrom<KinematicViscosityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type KinematicViscosityUnit<M extends UnitSubvalues> = KinematicViscosityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type KinematicViscosityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<KinematicViscosityUnitClass, M>;

/**
 * A unit of {@link KinematicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m²/s`
 */
export type SquareMeterPerSecond = KinematicViscosityUnit<{}>;
