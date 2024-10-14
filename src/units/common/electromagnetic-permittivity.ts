// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Farad, Meter } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type PermittivityUnitClass = BaseUnitClass<{
  Ampere: 2;
  Second: 4;
  Kilogram: -1;
  Meter: -3;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type Permittivity = AbstractUnitFrom<PermittivityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type PermittivityUnit<M extends UnitSubvalues> = PermittivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type PermittivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<PermittivityUnitClass, M>;

/**
 * A unit of {@link Permittivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `F/m`
 */
export type FaradPerMeter = PermittivityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("FaradPerMeter", () => {
    it("is farads per meter", () => {
      assert<Equals<FaradPerMeter, Divide<Farad, Meter>>>();
    });
  });
}
