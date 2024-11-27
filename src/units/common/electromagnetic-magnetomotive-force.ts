import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnitClass = BaseUnitClass<{
  Ampere: 1;
  Radian: 1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagnetomotiveForce = AbstractUnitFrom<MagnetomotiveForceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnit<M extends UnitSubvalues> = MagnetomotiveForceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagnetomotiveForceUnitClass, M>;

/**
 * A unit of {@link MagnetomotiveForce}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A⋅rad`
 */
export type AmpereRadian = MagnetomotiveForceUnit<{}>;
