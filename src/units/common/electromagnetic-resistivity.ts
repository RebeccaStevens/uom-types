// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Meter, Ohm } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ResistivityUnitClass = BaseUnitClass<{
  Ampere: -2;
  Kilogram: 1;
  Meter: 3;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type Resistivity = AbstractUnitFrom<ResistivityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ResistivityUnit<M extends UnitSubvalues> = ResistivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ResistivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ResistivityUnitClass, M>;

/**
 * A unit of {@link Resistivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ωm`
 */
export type OhmMeter = ResistivityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("OhmMeter", () => {
    it("is ohms by meters", () => {
      assert<Equals<OhmMeter, Multiply<Ohm, Meter>>>();
    });
  });
}
