// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Meter, type Siemens } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricalConductivityUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Meter: -3;
  Second: 3;
  Ampere: 2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricalConductivity =
  AbstractUnitFrom<ElectricalConductivityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricalConductivityUnit<M extends UnitSubvalues> =
  ElectricalConductivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricalConductivityUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricalConductivityUnitClass, M>;

/**
 * A unit of {@link ElectricalConductivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S/m`
 */
export type SiemensPerMeter = ElectricalConductivityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("SiemensPerMeter", () => {
    it("is siemens per meter", () => {
      assert<Equals<SiemensPerMeter, Divide<Siemens, Meter>>>();
    });
  });
}
