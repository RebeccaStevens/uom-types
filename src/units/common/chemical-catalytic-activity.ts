import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type CatalyticActivityUnitClass = BaseUnitClass<{ Mole: 1; Second: -1 }>;

/**
 * @group Abstract Units
 * @category Chemical
 */
export type CatalyticActivity = AbstractUnitFrom<CatalyticActivityUnitClass>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type CatalyticActivityUnit<M extends UnitSubvalues> = CatalyticActivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type CatalyticActivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<CatalyticActivityUnitClass, M>;

/**
 * A unit of {@link CatalyticActivity}.
 *
 * @group Units
 * @category Derived
 * @category Chemical
 * @symbol `kat`
 */
export type Katal = CatalyticActivityUnit<{}>;
