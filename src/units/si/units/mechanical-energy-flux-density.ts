// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Metre, type Joule, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyFluxDensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type EnergyFluxDensity = AbstractUnitFrom<EnergyFluxDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyFluxDensityUnit<M extends UnitSubvalues> =
  EnergyFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  EnergyFluxDensityUnitClass,
  M
>;

/**
 * A unit of {@link EnergyFluxDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/(m²⋅s)`
 */
export type JoulePerSquareMetreSecond = EnergyFluxDensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      JoulePerSquareMetreSecond,
      Divide<Joule, Multiply<Square<Metre>, Second>>
    >
  >();
}
