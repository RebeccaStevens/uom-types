// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Meter, type Watt, type Steradian } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Radiance = AbstractUnitFrom<RadianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadianceUnit<M extends UnitSubvalues> = RadianceUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  RadianceUnitClass,
  M
>;

/**
 * A unit of {@link Radiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m²)`
 */
export type WattPerSteradianquareMeter = RadianceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerSteradianquareMeter", () => {
    it("is watts per steradian square meter", () => {
      assert<
        Equals<
          WattPerSteradianquareMeter,
          Divide<Watt, Multiply<Steradian, Square<Meter>>>
        >
      >();
    });
  });
}
