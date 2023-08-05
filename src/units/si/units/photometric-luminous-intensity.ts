import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousIntensityUnitClass = SiUnitClass<{ Candela: 1 }>;

/**
 * @group Abstract Unit
 * @category Photometric
 */
export type LuminousIntensity = AbstractUnitFrom<LuminousIntensityUnitClass>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminousIntensityUnit<M extends UnitSubvalues> =
  LuminousIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
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
