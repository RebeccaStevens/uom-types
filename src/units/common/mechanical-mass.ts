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
export type MassUnitClass = BaseUnitClass<{
  Kilogram: 1;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Mass = AbstractUnitFrom<MassUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MassUnit<M extends UnitSubvalues> = MassUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MassUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MassUnitClass,
  M
>;

/**
 * A unit of {@link Mass}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `g`
 */
export type Gram = MassUnit<{ scalar10: -3 }>;

/**
 * A unit of {@link Mass}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `t`
 */
export type Tonne = MassUnit<{ scalar10: 3 }>;
