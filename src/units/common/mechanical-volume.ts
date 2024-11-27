// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Multiply } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Centi, Cubic, Deci, Milli, Square } from "../modifiers/index.ts";

import type { Meter } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnitClass = BaseUnitClass<{
  Meter: 3;
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
export type VolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<VolumeUnitClass, M>;

/**
 * A unit of volume.
 *
 * @group Units
 * @category Mechanical
 * @symbol `l`
 */
export type Liter = VolumeUnit<{ scalar10: -3 }>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Cubic Meters", () => {
    it("is meters by meters by meters", () => {
      assert<Equals<Cubic<Meter>, Multiply<Multiply<Meter, Meter>, Meter>>>();
      assert<Equals<Cubic<Meter>, Multiply<Square<Meter>, Meter>>>();
    });
  });

  describe("Cubic Centimeters", () => {
    it("is a milli liter", () => {
      assert<Equals<Cubic<Centi<Meter>>, Milli<Liter>>>();
    });
  });

  describe("Liters", () => {
    it("is milli cubic meter", () => {
      assert<Equals<Liter, Milli<Cubic<Meter>>>>();
      assert<Equals<Liter, Multiply<Multiply<Deci<Meter>, Deci<Meter>>, Deci<Meter>>>>();
    });
  });
}
