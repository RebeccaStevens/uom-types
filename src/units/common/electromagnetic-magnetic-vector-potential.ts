import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticVectorPotential = AbstractUnitFrom<MagneticVectorPotentialUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnit<M extends UnitSubvalues> = MagneticVectorPotentialUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticVectorPotentialUnitClass, M>;

/**
 * A unit of {@link MagneticVectorPotential}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb/m`
 */
export type WeberPerMeter = MagneticVectorPotentialUnit<{}>;
