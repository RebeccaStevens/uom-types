// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Meter, type Ampere } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitClass = BaseUnitClass<{
  Ampere: 1;
  Meter: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCurrentDensity =
  AbstractUnitFrom<ElectricCurrentDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnit<M extends UnitSubvalues> =
  ElectricCurrentDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricCurrentDensityUnitClass, M>;

/**
 * A unit of {@link ElectricCurrentDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m²`
 */
export type AmperePerSquareMeter = ElectricCurrentDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("AmperePerSquareMeter", () => {
    it("is amperes per square meter", () => {
      assert<Equals<AmperePerSquareMeter, Divide<Ampere, Square<Meter>>>>();
    });
  });
}
