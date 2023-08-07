import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type LengthUnitClass = BaseUnitClass<{ Metre: 1 }>;

/**
 * @group Abstract Unit
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
export type LengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LengthUnitClass,
  M
>;

/**
 * A unit of {@link Length}.
 *
 * @group Units
 * @category Base
 * @category Mechanical
 * @symbol `m`
 */
export type Metre = LengthUnit<{}>;
