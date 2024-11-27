import { type Equals, type Extends, assert } from "tsafe";
import { describe, it } from "vitest";

import type {
  AbstractUnit,
  AbstractUnitFrom,
  Unit,
  UnitClass,
  UnitConversionRate,
  UnitConversionRateFrom,
  UnitFrom,
  UnitKeyValues,
  UnitMeta,
  UnitSubvalues,
  UnknownAbstractUnit,
  UnknownUnit,
  UnknownUnitClass,
  UnknownUnitConversionRate,
  UnknownUnitKeyValues,
  UnknownUnitMeta,
} from "./core.ts";

describe("unit", () => {
  it("is equivalent to UnitFrom", () => {
    assert<Equals<Unit<{}>, UnitFrom<UnitClass<{}>>>>();
    assert<Equals<Unit<{ a: 1 }>, UnitFrom<UnitClass<{ a: 1 }>>>>();
    assert<Equals<Unit<UnitSubvalues>, UnitFrom<UnitClass<UnitSubvalues>>>>();
  });
});

describe("abstractUnit", () => {
  it("a super type of Unit", () => {
    assert<Extends<Unit<{}>, AbstractUnit<{}>>>();
    assert<Extends<Unit<{ a: 1 }>, AbstractUnit<{ a: 1 }>>>();
    assert<Extends<Unit<UnitSubvalues>, AbstractUnit<UnitSubvalues>>>();
    assert<Extends<UnitFrom<UnitClass<{}>>, AbstractUnitFrom<UnitClass<{}>>>>();
    assert<Extends<UnitFrom<UnitClass<{ a: 1 }>>, AbstractUnitFrom<UnitClass<{ a: 1 }>>>>();
    assert<Extends<UnitFrom<UnitClass<UnitSubvalues>>, AbstractUnitFrom<UnitClass<UnitSubvalues>>>>();
  });
});

describe("unitConversionRate", () => {
  it("a super type of Unit", () => {
    assert<Extends<Unit<{}>, UnitConversionRate<{}>>>();
    assert<Extends<Unit<{}, { a: 1 }>, UnitConversionRate<{ a: 1 }>>>();
    assert<Extends<Unit<{}, UnitSubvalues>, UnitConversionRate<UnitSubvalues>>>();
    assert<Extends<UnitFrom<UnitClass<{}>>, UnitConversionRateFrom<UnitMeta<{}>>>>();
    assert<Extends<UnitFrom<UnitClass<{}>, UnitMeta<{ a: 1 }>>, UnitConversionRateFrom<UnitMeta<{ a: 1 }>>>>();
    assert<
      Extends<UnitFrom<UnitClass<{}>, UnitMeta<UnitSubvalues>>, UnitConversionRateFrom<UnitMeta<UnitSubvalues>>>
    >();
  });
});

describe("unknown", () => {
  const assignableToConcreteTypes = "is assignable to concrete types";

  describe("unit", () => {
    it(assignableToConcreteTypes, () => {
      assert<Extends<Unit<{}>, UnknownUnit>>();
      assert<Extends<Unit<{ a: 1 }>, UnknownUnit>>();
      assert<Extends<Unit<UnitSubvalues>, UnknownUnit>>();
    });
  });

  describe("abstractUnit", () => {
    it(assignableToConcreteTypes, () => {
      assert<Extends<AbstractUnit<{}>, UnknownAbstractUnit>>();
      assert<Extends<AbstractUnit<{ a: 1 }>, UnknownAbstractUnit>>();
      assert<Extends<AbstractUnit<UnitSubvalues>, UnknownAbstractUnit>>();
    });
  });

  describe("unitConversionRate", () => {
    it(assignableToConcreteTypes, () => {
      assert<Extends<UnitConversionRate<{}>, UnknownUnitConversionRate>>();
      assert<Extends<UnitConversionRate<{ a: 1 }>, UnknownUnitConversionRate>>();
      assert<Extends<UnitConversionRate<UnitSubvalues>, UnknownUnitConversionRate>>();
    });
  });

  describe("unitClass", () => {
    it(assignableToConcreteTypes, () => {
      assert<Extends<UnitClass<{}>, UnknownUnitClass>>();
      assert<Extends<UnitClass<{ a: 1 }>, UnknownUnitClass>>();
      assert<Extends<UnitClass<UnitSubvalues>, UnknownUnitClass>>();
    });
  });

  describe("unitMeta", () => {
    it(assignableToConcreteTypes, () => {
      assert<Extends<UnitMeta<{}>, UnknownUnitMeta>>();
      assert<Extends<UnitMeta<{ a: 1 }>, UnknownUnitMeta>>();
      assert<Extends<UnitMeta<UnitSubvalues>, UnknownUnitMeta>>();
    });
  });

  describe("unitKeyValues", () => {
    it(assignableToConcreteTypes, () => {
      assert<Extends<UnitKeyValues<{}>, UnknownUnitKeyValues>>();
      assert<Extends<UnitKeyValues<{ a: 1 }>, UnknownUnitKeyValues>>();
      assert<Extends<UnitKeyValues<UnitSubvalues>, UnknownUnitKeyValues>>();
    });
  });
});
