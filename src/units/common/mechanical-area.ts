import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";
// eslint-disable-next-line ts/no-unused-vars
import type { Square } from "../modifiers/index.ts";

// eslint-disable-next-line ts/no-unused-vars
import type { Meter } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type AreaUnitClass = BaseUnitClass<{ Meter: 2 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Area = AbstractUnitFrom<AreaUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AreaUnit<M extends UnitSubvalues> = AreaUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AreaUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AreaUnitClass, M>;

/**
 * A unit of {@link Area} equal to 100 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `a`
 */
export type Are = AreaUnit<{ scalar10: 2 }>;

/**
 * A unit of {@link Area} equal to 10,000 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `ha`
 */
export type Hectare = AreaUnit<{ scalar10: 4 }>;
