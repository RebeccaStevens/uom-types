import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticPermeabilityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -2;
  Ampere: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticPermeability = AbstractUnitFrom<MagneticPermeabilityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticPermeabilityUnit<M extends UnitSubvalues> = MagneticPermeabilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticPermeabilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticPermeabilityUnitClass, M>;

/**
 * A unit of {@link MagneticPermeability}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `H/m`
 */
export type HenryPerMeter = MagneticPermeabilityUnit<{}>;
