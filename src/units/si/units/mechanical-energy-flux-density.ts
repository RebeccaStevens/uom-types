// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type MultiplyUnits,
  type DivideUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Joule, type Second, type SquareMetre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyFluxDensityUnitClass = SiUnitClass<{
  Kilogram: 1;
  Second: -3;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type EnergyFluxDensity = AbstractUnitFrom<EnergyFluxDensityUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type EnergyFluxDensityUnit<M extends UnitSubvalues> =
  EnergyFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
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
      DivideUnits<Joule, MultiplyUnits<SquareMetre, Second>>
    >
  >();
}
