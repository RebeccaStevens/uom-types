// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
  type Multiply,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Joule, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type ActionUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Action = AbstractUnitFrom<ActionUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ActionUnit<M extends UnitSubvalues> = ActionUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ActionUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ActionUnitClass,
  M
>;

/**
 * A unit of {@link Action}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Js`
 */
export type JouleSecond = ActionUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("GrayPerSecond", () => {
    it("is joules per second", () => {
      assert<Equals<JouleSecond, Multiply<Joule, Second>>>();
    });
  });
}
