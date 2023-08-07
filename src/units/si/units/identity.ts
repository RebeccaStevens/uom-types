import {
  type AbstractUnitFrom,
  type Unit,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Base
 */
export type IdentityUnitClass = SiUnitClass<{}>;

/**
 * @group Abstract Unit
 * @category Base
 */
export type Identity = AbstractUnitFrom<IdentityUnitClass>;

/**
 * @group Unit Creators
 * @category Base
 */
export type IdentityUnit<M extends UnitSubvalues> = IdentityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Base
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
