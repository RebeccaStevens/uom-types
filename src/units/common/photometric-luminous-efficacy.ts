// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Lumen, Watt } from "./index.ts";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousEfficacyUnitClass = BaseUnitClass<{
  Candela: 1;
  Radian: 2;
  Kilogram: -1;
  Meter: -2;
  Second: 3;
}>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousEfficacy = AbstractUnitFrom<LuminousEfficacyUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousEfficacyUnit<M extends UnitSubvalues> = LuminousEfficacyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousEfficacyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LuminousEfficacyUnitClass, M>;

/**
 * A unit of {@link LuminousEfficacy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm/W`
 */
export type LumenPerWatt = LuminousEfficacyUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("LumenPerWatt", () => {
    it("is lumens per watt", () => {
      assert<Equals<LumenPerWatt, Divide<Lumen, Watt>>>();
    });
  });
}
