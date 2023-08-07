// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Farad, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type PermittivityUnitClass = BaseUnitClass<{
  Ampere: 2;
  Second: 4;
  Kilogram: -1;
  Metre: -3;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type Permittivity = AbstractUnitFrom<PermittivityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type PermittivityUnit<M extends UnitSubvalues> = PermittivityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type PermittivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  PermittivityUnitClass,
  M
>;

/**
 * A unit of {@link Permittivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `F/m`
 */
export type FaradPerMetre = PermittivityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<FaradPerMetre, Divide<Farad, Metre>>>();
}
