// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import {
  type Milli,
  type Cubic,
  type Square,
  type Centi,
  type Deci,
} from "../modifiers";

import { type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnitClass = BaseUnitClass<{
  Metre: 3;
}>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Volume = AbstractUnitFrom<VolumeUnitClass>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnit<M extends UnitSubvalues> = VolumeUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  VolumeUnitClass,
  M
>;

/**
 * A unit of volume.
 *
 * @group Units
 * @category Mechanical
 * @symbol `l`
 */
export type Litre = VolumeUnit<{ scalar10: -3 }>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Cubic Metres", () => {
    it("is metres by metres by metres", () => {
      assert<Equals<Cubic<Metre>, Multiply<Multiply<Metre, Metre>, Metre>>>();
      assert<Equals<Cubic<Metre>, Multiply<Square<Metre>, Metre>>>();
    });
  });

  describe("Cubic Centimetres", () => {
    it("is a milli litre", () => {
      assert<Equals<Cubic<Centi<Metre>>, Milli<Litre>>>();
    });
  });

  describe("Litres", () => {
    it("is milli cubic metre", () => {
      assert<Equals<Litre, Milli<Cubic<Metre>>>>();
      assert<
        Equals<Litre, Multiply<Multiply<Deci<Metre>, Deci<Metre>>, Deci<Metre>>>
      >();
    });
  });
}
