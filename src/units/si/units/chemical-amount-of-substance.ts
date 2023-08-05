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
 * @category Chemical
 */
export type AmountOfSubstanceUnitClass = SiUnitClass<{ Mole: 1 }>;

/**
 * @group Abstract Unit
 * @category Chemical
 */
export type AmountOfSubstance = AbstractUnitFrom<AmountOfSubstanceUnitClass>;

/**
 * @group Unit Creators
 * @category Chemical
 */
export type AmountOfSubstanceUnit<M extends UnitSubvalues> =
  AmountOfSubstanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Chemical
 */
export type AmountOfSubstanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AmountOfSubstanceUnitClass,
  M
>;

/**
 * A unit of {@link AmountOfSubstance}.
 *
 * @group Units
 * @category Base
 * @category Chemical
 * @symbol `mol`
 */
export type Mole = AmountOfSubstanceUnit<{}>;
