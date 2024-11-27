// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Square } from "../modifiers/index.ts";

import type { Candela, Meter } from "./index.ts";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminanceUnitClass = BaseUnitClass<{
  Candela: 1;
  Meter: -2;
}>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type Luminance = AbstractUnitFrom<LuminanceUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminanceUnit<M extends UnitSubvalues> = LuminanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LuminanceUnitClass, M>;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Derived
 * @category Photometric
 * @symbol `lx`
 */
export type Lux = LuminanceUnit<{}>;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Photometric
 * @symbol `cd/m²`
 */
export type CandelaPerSquareMeter = Lux;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Lux", () => {
    it("is CandelaPerSquareMeter", () => {
      assert<Equals<Lux, CandelaPerSquareMeter>>();
    });

    it("is candela per square meter", () => {
      assert<Equals<Lux, Divide<Candela, Square<Meter>>>>();
    });
  });
}
