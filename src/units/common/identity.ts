import {
  type AbstractUnitFrom,
  type Unit,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

/**
 * @group Unit Classes
 */
export type IdentityUnitClass = BaseUnitClass<{}>;

/**
 * @group Abstract Unit
 */
export type Identity = AbstractUnitFrom<IdentityUnitClass>;

/**
 * @group Unit Generators
 */
export type IdentityUnit<M extends UnitSubvalues> = IdentityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 */
export type IdentityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  IdentityUnitClass,
  M
>;

/**
 * A {@link Unit} with no units.
 *
 * @group Units
 * @category Base
 * @symbol ``
 */
export type Unitless = IdentityUnit<{}>;
