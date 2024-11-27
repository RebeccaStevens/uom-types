import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnthalpyUnitClass = BaseUnitClass<{ Meter: 2; Second: -2 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Enthalpy = AbstractUnitFrom<EnthalpyUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnthalpyUnit<M extends UnitSubvalues> = EnthalpyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnthalpyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnthalpyUnitClass, M>;

/**
 * A unit of {@link Enthalpy}.
 *
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Gy`
 */
export type Gray = EnthalpyUnit<{}>;
