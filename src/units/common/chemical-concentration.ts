import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type MolarConcentrationUnitClass = BaseUnitClass<{ Mole: 1; Meter: -3 }>;

/**
 * @group Abstract Units
 * @category Chemical
 */
export type MolarConcentration = AbstractUnitFrom<MolarConcentrationUnitClass>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type MolarConcentrationUnit<M extends UnitSubvalues> = MolarConcentrationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type MolarConcentrationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MolarConcentrationUnitClass, M>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link MolePerCubicMeter}.
 *
 * @group Units
 * @category Chemical
 * @symbol `c`
 */
export type Concentration = MolarConcentrationUnit<{}>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link Concentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/m³`
 */
export type MolePerCubicMeter = Concentration;

/**
 * A unit of {@link MolarConcentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/l`
 */
export type MolePerLiter = MolarConcentrationUnit<{ scalar10: 3 }>;
