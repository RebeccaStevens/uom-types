import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type LengthUnitClass = BaseUnitClass<{ Meter: 1 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Length = AbstractUnitFrom<LengthUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type LengthUnit<M extends UnitSubvalues> = LengthUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type LengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LengthUnitClass, M>;

/**
 * A unit of {@link Length}.
 *
 * @group Units
 * @category Base
 * @category Mechanical
 * @symbol `m`
 */
export type Meter = LengthUnit<{}>;
