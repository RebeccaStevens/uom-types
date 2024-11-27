import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { AbstractUnit, Divide, Inverse, Multiply, Pow, Root, Unit, UnitConversionRate } from "../index.ts";

describe("inverse", () => {
  it("works with Units", () => {
    assert<Equals<Inverse<Unit<{ a: 1; b: 2 }>>, Unit<{ a: -1; b: -2 }>>>();
  });

  it("works with Unit by AbstractUnit", () => {
    assert<Equals<Inverse<AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: -2; b: -2 }>>>();
  });

  it("works with Unit by UnitConversionRate", () => {
    assert<Equals<Inverse<UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: -2; b: -2 }>>>();
  });
});

describe("multiply", () => {
  it("works with Unit by Unit", () => {
    assert<Equals<Multiply<Unit<{ a: 1 }>, Unit<{ a: 1; b: 2 }>>, Unit<{ a: 2; b: 2 }>>>();
  });

  it("works with Unit by number", () => {
    assert<Equals<Multiply<Unit<{ a: 2; b: 2 }>, number>, Unit<{ a: 2; b: 2 }>>>();

    assert<Equals<Multiply<number, Unit<{ a: 2; b: 2 }>>, Unit<{ a: 2; b: 2 }>>>();
  });

  it("works with Unit by concrete number", () => {
    assert<Equals<Multiply<Unit<{ a: 2; b: 2 }>, 2>, Unit<{ a: 2; b: 2 }>>>();

    assert<Equals<Multiply<2, Unit<{ a: 2; b: 2 }>>, Unit<{ a: 2; b: 2 }>>>();
  });

  it("works with Unit by AbstractUnit", () => {
    assert<Equals<Multiply<Unit<{ a: 2; b: 2 }>, AbstractUnit<{ a: 1 }>>, Unit<{ a: 3; b: 2 }>>>();

    assert<Equals<Multiply<AbstractUnit<{ a: 1 }>, Unit<{ a: 2; b: 2 }>>, Unit<{ a: 3; b: 2 }>>>();
  });

  it("works with AbstractUnit by AbstractUnit", () => {
    assert<Equals<Multiply<AbstractUnit<{ a: 1 }>, AbstractUnit<{ a: 1; b: 2 }>>, AbstractUnit<{ a: 2; b: 2 }>>>();
  });

  it("works with AbstractUnit by number", () => {
    assert<Equals<Multiply<AbstractUnit<{ a: 2; b: 2 }>, number>, AbstractUnit<{ a: 2; b: 2 }>>>();

    assert<Equals<Multiply<number, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: 2; b: 2 }>>>();
  });

  it("works with AbstractUnit by concrete number", () => {
    assert<Equals<Multiply<AbstractUnit<{ a: 2; b: 2 }>, 2>, AbstractUnit<{ a: 2; b: 2 }>>>();

    assert<Equals<Multiply<2, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: 2; b: 2 }>>>();
  });

  it("works with AbstractUnit by UnitConversionRate", () => {
    assert<
      Equals<
        Multiply<AbstractUnit<{ a: 2; b: 2 }>, UnitConversionRate<{ c: 3; d: 4 }>>,
        Unit<{ a: 2; b: 2 }, { c: 3; d: 4 }>
      >
    >();

    assert<
      Equals<
        Multiply<UnitConversionRate<{ c: 3; d: 4 }>, AbstractUnit<{ a: 2; b: 2 }>>,
        Unit<{ a: 2; b: 2 }, { c: 3; d: 4 }>
      >
    >();
  });

  it("works with UnitConversionRate by UnitConversionRate", () => {
    assert<
      Equals<
        Multiply<UnitConversionRate<{ a: 1 }>, UnitConversionRate<{ a: 1; b: 2 }>>,
        UnitConversionRate<{ a: 2; b: 2 }>
      >
    >();
  });

  it("works with UnitConversionRate by number", () => {
    assert<Equals<Multiply<UnitConversionRate<{ a: 2; b: 2 }>, number>, UnitConversionRate<{ a: 2; b: 2 }>>>();

    assert<Equals<Multiply<number, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: 2; b: 2 }>>>();
  });

  it("works with UnitConversionRate by concrete number", () => {
    assert<Equals<Multiply<UnitConversionRate<{ a: 2; b: 2 }>, 2>, UnitConversionRate<{ a: 2; b: 2 }>>>();

    assert<Equals<Multiply<2, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: 2; b: 2 }>>>();
  });
});

describe("divide", () => {
  it("works with Unit by Unit", () => {
    assert<Equals<Divide<Unit<{ a: 1 }>, Unit<{ a: 1; b: 2 }>>, Unit<{ b: -2 }>>>();
  });

  it("works with Unit by number", () => {
    assert<Equals<Divide<Unit<{ a: 2; b: 2 }>, number>, Unit<{ a: 2; b: 2 }>>>();

    assert<Equals<Divide<number, Unit<{ a: 2; b: 2 }>>, Unit<{ a: -2; b: -2 }>>>();
  });

  it("works with Unit by concrete number", () => {
    assert<Equals<Divide<Unit<{ a: 2; b: 2 }>, 2>, Unit<{ a: 2; b: 2 }>>>();

    assert<Equals<Divide<2, Unit<{ a: 2; b: 2 }>>, Unit<{ a: -2; b: -2 }>>>();
  });

  it("works with Unit by AbstractUnit", () => {
    assert<Equals<Divide<Unit<{ a: 2; b: 2 }>, AbstractUnit<{ a: 1 }>>, Unit<{ a: 1; b: 2 }>>>();

    assert<Equals<Divide<AbstractUnit<{ a: 1 }>, Unit<{ a: 2; b: 2 }>>, Unit<{ a: -1; b: -2 }>>>();
  });

  it("works with AbstractUnit by AbstractUnit", () => {
    assert<Equals<Divide<AbstractUnit<{ a: 1 }>, AbstractUnit<{ a: 1; b: 2 }>>, AbstractUnit<{ b: -2 }>>>();
  });

  it("works with AbstractUnit by number", () => {
    assert<Equals<Divide<AbstractUnit<{ a: 2; b: 2 }>, number>, AbstractUnit<{ a: 2; b: 2 }>>>();

    assert<Equals<Divide<number, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: -2; b: -2 }>>>();
  });

  it("works with AbstractUnit by concrete number", () => {
    assert<Equals<Divide<AbstractUnit<{ a: 2; b: 2 }>, 2>, AbstractUnit<{ a: 2; b: 2 }>>>();

    assert<Equals<Divide<2, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: -2; b: -2 }>>>();
  });

  it("works with AbstractUnit by UnitConversionRate", () => {
    assert<
      Equals<
        Divide<AbstractUnit<{ a: 2; b: 2 }>, UnitConversionRate<{ c: 3; d: 4 }>>,
        Unit<{ a: 2; b: 2 }, { c: -3; d: -4 }>
      >
    >();

    assert<
      Equals<
        Divide<UnitConversionRate<{ c: 3; d: 4 }>, AbstractUnit<{ a: 2; b: 2 }>>,
        Unit<{ a: -2; b: -2 }, { c: 3; d: 4 }>
      >
    >();
  });

  it("works with UnitConversionRate by UnitConversionRate", () => {
    assert<
      Equals<Divide<UnitConversionRate<{ a: 1 }>, UnitConversionRate<{ a: 1; b: 2 }>>, UnitConversionRate<{ b: -2 }>>
    >();
  });

  it("works with UnitConversionRate by number", () => {
    assert<Equals<Divide<UnitConversionRate<{ a: 2; b: 2 }>, number>, UnitConversionRate<{ a: 2; b: 2 }>>>();

    assert<Equals<Divide<number, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: -2; b: -2 }>>>();
  });

  it("works with UnitConversionRate by concrete number", () => {
    assert<Equals<Divide<UnitConversionRate<{ a: 2; b: 2 }>, 2>, UnitConversionRate<{ a: 2; b: 2 }>>>();

    assert<Equals<Divide<2, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: -2; b: -2 }>>>();
  });
});

describe("pow", () => {
  it("works with Units", () => {
    assert<Equals<Pow<Unit<{ a: 1 }>, 2>, Unit<{ a: 2 }>>>();
    assert<Equals<Pow<Unit<{ a: 2 }>, 2>, Unit<{ a: 4 }>>>();
    assert<Equals<Pow<Unit<{ a: -2 }>, 2>, Unit<{ a: -4 }>>>();
    assert<Equals<Pow<Unit<{ a: 1 }>, 3>, Unit<{ a: 3 }>>>();
    assert<Equals<Pow<Unit<{ a: 2 }>, 3>, Unit<{ a: 6 }>>>();
    assert<Equals<Pow<Unit<{ a: -2 }>, 3>, Unit<{ a: -6 }>>>();
  });

  it("works with AbstractUnit", () => {
    assert<Equals<Pow<AbstractUnit<{ a: 1 }>, 2>, AbstractUnit<{ a: 2 }>>>();
    assert<Equals<Pow<AbstractUnit<{ a: 2 }>, 2>, AbstractUnit<{ a: 4 }>>>();
    assert<Equals<Pow<AbstractUnit<{ a: -2 }>, 2>, AbstractUnit<{ a: -4 }>>>();
    assert<Equals<Pow<AbstractUnit<{ a: 1 }>, 3>, AbstractUnit<{ a: 3 }>>>();
    assert<Equals<Pow<AbstractUnit<{ a: 2 }>, 3>, AbstractUnit<{ a: 6 }>>>();
    assert<Equals<Pow<AbstractUnit<{ a: -2 }>, 3>, AbstractUnit<{ a: -6 }>>>();
  });

  it("works with UnitConversionRate", () => {
    assert<Equals<Pow<UnitConversionRate<{ a: 1 }>, 2>, UnitConversionRate<{ a: 2 }>>>();
    assert<Equals<Pow<UnitConversionRate<{ a: 2 }>, 2>, UnitConversionRate<{ a: 4 }>>>();
    assert<Equals<Pow<UnitConversionRate<{ a: -2 }>, 2>, UnitConversionRate<{ a: -4 }>>>();
    assert<Equals<Pow<UnitConversionRate<{ a: 1 }>, 3>, UnitConversionRate<{ a: 3 }>>>();
    assert<Equals<Pow<UnitConversionRate<{ a: 2 }>, 3>, UnitConversionRate<{ a: 6 }>>>();
    assert<Equals<Pow<UnitConversionRate<{ a: -2 }>, 3>, UnitConversionRate<{ a: -6 }>>>();
  });
});

describe("root", () => {
  it("works with Units", () => {
    assert<Equals<Root<Unit<{ a: 4 }>, 2>, Unit<{ a: 2 }>>>();
    assert<Equals<Root<Unit<{ a: 2 }>, 2>, Unit<{ a: 1 }>>>();
    assert<Equals<Root<Unit<{ a: -2 }>, 2>, Unit<{ a: -1 }>>>();
    assert<Equals<Root<Unit<{ a: 6 }>, 3>, Unit<{ a: 2 }>>>();
    assert<Equals<Root<Unit<{ a: 3 }>, 3>, Unit<{ a: 1 }>>>();
    assert<Equals<Root<Unit<{ a: -3 }>, 3>, Unit<{ a: -1 }>>>();
  });

  it("works with AbstractUnit", () => {
    assert<Equals<Root<AbstractUnit<{ a: 4 }>, 2>, AbstractUnit<{ a: 2 }>>>();
    assert<Equals<Root<AbstractUnit<{ a: 2 }>, 2>, AbstractUnit<{ a: 1 }>>>();
    assert<Equals<Root<AbstractUnit<{ a: -2 }>, 2>, AbstractUnit<{ a: -1 }>>>();
    assert<Equals<Root<AbstractUnit<{ a: 6 }>, 3>, AbstractUnit<{ a: 2 }>>>();
    assert<Equals<Root<AbstractUnit<{ a: 3 }>, 3>, AbstractUnit<{ a: 1 }>>>();
    assert<Equals<Root<AbstractUnit<{ a: -3 }>, 3>, AbstractUnit<{ a: -1 }>>>();
  });

  it("works with UnitConversionRate", () => {
    assert<Equals<Root<UnitConversionRate<{ a: 4 }>, 2>, UnitConversionRate<{ a: 2 }>>>();
    assert<Equals<Root<UnitConversionRate<{ a: 2 }>, 2>, UnitConversionRate<{ a: 1 }>>>();
    assert<Equals<Root<UnitConversionRate<{ a: -2 }>, 2>, UnitConversionRate<{ a: -1 }>>>();
    assert<Equals<Root<UnitConversionRate<{ a: 6 }>, 3>, UnitConversionRate<{ a: 2 }>>>();
    assert<Equals<Root<UnitConversionRate<{ a: 3 }>, 3>, UnitConversionRate<{ a: 1 }>>>();
    assert<Equals<Root<UnitConversionRate<{ a: -3 }>, 3>, UnitConversionRate<{ a: -1 }>>>();
  });
});
