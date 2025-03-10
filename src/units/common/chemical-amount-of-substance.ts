import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type AmountOfSubstanceUnitClass = BaseUnitClass<{ Mole: 1 }>;

/**
 * @group Abstract Units
 * @category Chemical
 */
export type AmountOfSubstance = AbstractUnitFrom<AmountOfSubstanceUnitClass>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type AmountOfSubstanceUnit<M extends UnitSubvalues> = AmountOfSubstanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type AmountOfSubstanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AmountOfSubstanceUnitClass, M>;

/**
 * A unit of {@link AmountOfSubstance}.
 *
 * @group Units
 * @category Base
 * @category Chemical
 * @symbol `mol`
 */
export type Mole = AmountOfSubstanceUnit<{}>;
