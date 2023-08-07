// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import { type UnitSubvalues, type Unit } from "./core";
import {
  type Exponent,
  type DivideExponents,
  type MultiplyExponents,
} from "./exponents";
import { type FlatternAlias, type GetExponent } from "./utils";

/**
 * Multiple the exponent values of a unit by a number.
 */
export type MultiplyUnitExponents<
  T extends number,
  E extends Exponent,
> = T extends Unit<infer Config, infer Meta>
  ? Unit<
      FlatternAlias<MultiplyUnitSubvaluesExponents<Config, E>>,
      FlatternAlias<MultiplyUnitSubvaluesExponents<Meta, E>>
    >
  : number;

type MultiplyUnitSubvaluesExponents<
  T extends UnitSubvalues,
  E extends Exponent,
> = {
  [S in keyof T]: MultiplyExponents<GetExponent<T, S>, E>;
};

/**
 * Divide the exponent values of a unit by a number.
 */
export type DivideUnitExponents<
  T extends number,
  E extends Exponent,
> = T extends Unit<infer Config, infer Meta>
  ? Unit<
      FlatternAlias<DivideUnitSubvaluesExponents<Config, E>>,
      FlatternAlias<DivideUnitSubvaluesExponents<Meta, E>>
    >
  : number;

type DivideUnitSubvaluesExponents<
  T extends UnitSubvalues,
  E extends Exponent,
> = {
  [S in keyof T]: DivideExponents<GetExponent<T, S>, E>;
};

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<MultiplyUnitExponents<Unit<{ a: 1 }>, 2>, Unit<{ a: 2 }>>>();
  assert<Equals<MultiplyUnitExponents<Unit<{ a: 2 }>, 2>, Unit<{ a: 4 }>>>();
  assert<Equals<MultiplyUnitExponents<Unit<{ a: -2 }>, 2>, Unit<{ a: -4 }>>>();
  assert<Equals<MultiplyUnitExponents<Unit<{ a: 1 }>, 3>, Unit<{ a: 3 }>>>();
  assert<Equals<MultiplyUnitExponents<Unit<{ a: 2 }>, 3>, Unit<{ a: 6 }>>>();
  assert<Equals<MultiplyUnitExponents<Unit<{ a: -2 }>, 3>, Unit<{ a: -6 }>>>();

  assert<Equals<DivideUnitExponents<Unit<{ a: 4 }>, 2>, Unit<{ a: 2 }>>>();
  assert<Equals<DivideUnitExponents<Unit<{ a: 2 }>, 2>, Unit<{ a: 1 }>>>();
  assert<Equals<DivideUnitExponents<Unit<{ a: -2 }>, 2>, Unit<{ a: -1 }>>>();
  assert<Equals<DivideUnitExponents<Unit<{ a: 6 }>, 3>, Unit<{ a: 2 }>>>();
  assert<Equals<DivideUnitExponents<Unit<{ a: 3 }>, 3>, Unit<{ a: 1 }>>>();
  assert<Equals<DivideUnitExponents<Unit<{ a: -3 }>, 3>, Unit<{ a: -1 }>>>();
}
