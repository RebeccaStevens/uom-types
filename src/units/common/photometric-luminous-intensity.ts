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
 * @category Photometric
 */
export type LuminousIntensityUnitClass = BaseUnitClass<{ Candela: 1 }>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousIntensity = AbstractUnitFrom<LuminousIntensityUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousIntensityUnit<M extends UnitSubvalues> =
  LuminousIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousIntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LuminousIntensityUnitClass,
  M
>;

/**
 * A unit of luminous intensity.
 *
 * @group Units
 * @category Base
 * @symbol `cd`
 */
export type Candela = LuminousIntensityUnit<{}>;
