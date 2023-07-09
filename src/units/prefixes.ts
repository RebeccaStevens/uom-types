import { type UnknownUnit, type Multiply, type Unit } from "#uom-types";

export type Quecto<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -30 }>
>;
export type Ronto<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -27 }>
>;
export type Yocto<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -24 }>
>;
export type Zepto<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -21 }>
>;
export type Atto<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -18 }>
>;
export type Femto<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -15 }>
>;
export type Pico<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -12 }>
>;
export type Nano<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -9 }>
>;
export type Micro<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -6 }>
>;
export type Milli<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -3 }>
>;
export type Centi<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -2 }>
>;
export type Deci<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: -1 }>
>;

export type Deka<T extends UnknownUnit> = Multiply<T, Unit<{ magnitude10: 1 }>>;
export type Hecto<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: 2 }>
>;
export type Kilo<T extends UnknownUnit> = Multiply<T, Unit<{ magnitude10: 3 }>>;
export type Mega<T extends UnknownUnit> = Multiply<T, Unit<{ magnitude10: 6 }>>;
export type Giga<T extends UnknownUnit> = Multiply<T, Unit<{ magnitude10: 9 }>>;
export type Tera<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: 12 }>
>;
export type Peta<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: 15 }>
>;
export type Exa<T extends UnknownUnit> = Multiply<T, Unit<{ magnitude10: 18 }>>;
export type Zetta<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: 21 }>
>;
export type Yotta<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: 24 }>
>;
export type Ronna<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: 27 }>
>;
export type Quetta<T extends UnknownUnit> = Multiply<
  T,
  Unit<{ magnitude10: 30 }>
>;
