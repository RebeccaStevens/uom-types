export type Exponent = -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type NegativeExponent<T extends Exponent> = T extends -6
  ? 6
  : T extends -5
  ? 5
  : T extends -4
  ? 4
  : T extends -3
  ? 3
  : T extends -2
  ? 2
  : T extends -1
  ? 1
  : T extends 0
  ? 0
  : T extends 1
  ? -1
  : T extends 2
  ? -2
  : T extends 3
  ? -3
  : T extends 4
  ? -4
  : T extends 5
  ? -5
  : T extends 6
  ? -6
  : never;

export type SumExponents<A extends Exponent, B extends Exponent> = A extends -6
  ? B extends 0
    ? A
    : B extends 1
    ? -5
    : B extends 2
    ? -4
    : B extends 3
    ? -3
    : B extends 4
    ? -2
    : B extends 5
    ? -1
    : B extends 6
    ? 0
    : never
  : A extends -5
  ? B extends -1
    ? -6
    : B extends 0
    ? A
    : B extends 1
    ? -4
    : B extends 2
    ? -3
    : B extends 3
    ? -2
    : B extends 4
    ? -1
    : B extends 5
    ? 0
    : B extends 6
    ? 1
    : never
  : A extends -4
  ? B extends -2
    ? -6
    : B extends -1
    ? -5
    : B extends 0
    ? A
    : B extends 1
    ? -3
    : B extends 2
    ? -2
    : B extends 3
    ? -1
    : B extends 4
    ? 0
    : B extends 5
    ? 1
    : B extends 6
    ? 2
    : never
  : A extends -3
  ? B extends -3
    ? -6
    : B extends -2
    ? -5
    : B extends -1
    ? -4
    : B extends 0
    ? A
    : B extends 1
    ? -2
    : B extends 2
    ? -1
    : B extends 3
    ? 0
    : B extends 4
    ? 1
    : B extends 5
    ? 2
    : B extends 6
    ? 3
    : never
  : A extends -2
  ? B extends -4
    ? -6
    : B extends -3
    ? -5
    : B extends -2
    ? -4
    : B extends -1
    ? -3
    : B extends 0
    ? A
    : B extends 1
    ? -1
    : B extends 2
    ? 0
    : B extends 3
    ? 1
    : B extends 4
    ? 2
    : B extends 5
    ? 3
    : B extends 6
    ? 4
    : never
  : A extends -1
  ? B extends -5
    ? -6
    : B extends -4
    ? -5
    : B extends -3
    ? -4
    : B extends -2
    ? -3
    : B extends -1
    ? -2
    : B extends 0
    ? A
    : B extends 1
    ? 0
    : B extends 2
    ? 1
    : B extends 3
    ? 2
    : B extends 4
    ? 3
    : B extends 5
    ? 4
    : B extends 6
    ? 5
    : never
  : A extends 0
  ? B
  : A extends 1
  ? B extends -6
    ? -5
    : B extends -5
    ? -4
    : B extends -4
    ? -3
    : B extends -3
    ? -2
    : B extends -2
    ? -1
    : B extends -1
    ? 0
    : B extends 0
    ? A
    : B extends 1
    ? 2
    : B extends 2
    ? 3
    : B extends 3
    ? 4
    : B extends 4
    ? 5
    : B extends 5
    ? 6
    : never
  : A extends 2
  ? B extends -6
    ? -4
    : B extends -5
    ? -3
    : B extends -4
    ? -2
    : B extends -3
    ? -1
    : B extends -2
    ? 0
    : B extends -1
    ? 1
    : B extends 0
    ? A
    : B extends 1
    ? 3
    : B extends 2
    ? 4
    : B extends 3
    ? 5
    : B extends 4
    ? 6
    : never
  : A extends 3
  ? B extends -6
    ? -3
    : B extends -5
    ? -2
    : B extends -4
    ? -1
    : B extends -3
    ? 0
    : B extends -2
    ? 1
    : B extends -1
    ? 2
    : B extends 0
    ? A
    : B extends 1
    ? 4
    : B extends 2
    ? 5
    : B extends 3
    ? 6
    : never
  : A extends 4
  ? B extends -6
    ? -2
    : B extends -5
    ? -1
    : B extends -4
    ? 0
    : B extends -3
    ? 1
    : B extends -2
    ? 2
    : B extends -1
    ? 3
    : B extends 0
    ? A
    : B extends 1
    ? 5
    : B extends 2
    ? 6
    : never
  : A extends 5
  ? B extends -6
    ? -1
    : B extends -5
    ? 0
    : B extends -4
    ? 1
    : B extends -3
    ? 2
    : B extends -2
    ? 3
    : B extends -1
    ? 4
    : B extends 0
    ? A
    : B extends 1
    ? 6
    : never
  : A extends 6
  ? B extends -6
    ? 0
    : B extends -5
    ? 1
    : B extends -4
    ? 2
    : B extends -3
    ? 3
    : B extends -2
    ? 4
    : B extends -1
    ? 5
    : B extends 0
    ? A
    : never
  : never;

export type SubExponents<A extends Exponent, B extends Exponent> = SumExponents<
  A,
  NegativeExponent<B>
>;

export type MultiplyExponents<A extends Exponent, B extends 2> = B extends 2
  ? A extends -3
    ? -6
    : A extends -2
    ? -4
    : A extends -1
    ? -2
    : A extends 0
    ? 0
    : A extends 1
    ? 2
    : A extends 2
    ? 4
    : A extends 3
    ? 6
    : never
  : never;

export type DivideExponents<A extends Exponent, B extends 2> = B extends 2
  ? A extends -6
    ? -3
    : A extends -4
    ? -2
    : A extends -2
    ? -1
    : A extends 0
    ? 0
    : A extends 2
    ? 1
    : A extends 4
    ? 2
    : A extends 6
    ? 3
    : never
  : never;

// export type DivideExponents<
//   A extends Exponent,
//   B extends Exponent,
// > = SumExponents<A, InverseExponent<B>>;
