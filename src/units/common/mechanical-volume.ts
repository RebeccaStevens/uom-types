import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnitClass = BaseUnitClass<{
  Meter: 3;
}>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Volume = AbstractUnitFrom<VolumeUnitClass>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnit<M extends UnitSubvalues> = VolumeUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<VolumeUnitClass, M>;

/**
 * A unit of volume.
 *
 * @group Units
 * @category Mechanical
 * @symbol `l`
 */
export type Liter = VolumeUnit<{ scalar10: -3 }>;
