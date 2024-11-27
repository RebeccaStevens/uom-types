// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Meter, Siemens } from "./index.ts";

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
export type ElectricalConductivity = AbstractUnitFrom<ElectricalConductivityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricalConductivityUnit<M extends UnitSubvalues> = ElectricalConductivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricalConductivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricalConductivityUnitClass, M>;

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
