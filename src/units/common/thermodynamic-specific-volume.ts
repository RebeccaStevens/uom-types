import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type SpecificVolumeUnitClass = BaseUnitClass<{ Kilogram: -1; Meter: 3 }>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type SpecificVolume = AbstractUnitFrom<SpecificVolumeUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificVolumeUnit<M extends UnitSubvalues> = SpecificVolumeUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificVolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpecificVolumeUnitClass, M>;

/**
 * A unit of {@link SpecificVolume}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m³/kg`
 */
export type CubicMeterPerKilogram = SpecificVolumeUnit<{}>;
