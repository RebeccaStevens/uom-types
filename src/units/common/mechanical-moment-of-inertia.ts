import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MomentOfInertiaUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type MomentOfInertia = AbstractUnitFrom<MomentOfInertiaUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MomentOfInertiaUnit<M extends UnitSubvalues> = MomentOfInertiaUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MomentOfInertiaUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MomentOfInertiaUnitClass, M>;

/**
 * A unit of {@link MomentOfInertia}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg⋅m²/sr`
 */
export type KilogramSquareMeterPerSteradian = MomentOfInertiaUnit<{}>;
