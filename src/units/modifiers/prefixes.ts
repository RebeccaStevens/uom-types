/**
 * @file Autogenerated File - Don't manually edit.
 */

import type { UnknownUnit, UnitConversionRate } from "../../core.ts";
import type { Multiply } from "../../units-operations.ts";

/**
 * Binary prefix denoting an order of magnitude of 10^1.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Deka<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: 1 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^-1.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Deci<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: -1 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^2.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Hecto<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: 2 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^-2.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Centi<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: -2 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^3.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Kilo<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: 3 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^-3.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Milli<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: -3 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^6.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Mega<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: 6 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^-6.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Micro<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: -6 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^9.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Giga<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: 9 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^-9.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Nano<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: -9 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^12.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Tera<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: 12 }>>;

/**
 * Binary prefix denoting an order of magnitude of 10^-12.
 *
 * @group Modifiers
 * @category Metric Prefixes
 */
export type Pico<T extends UnknownUnit> = Multiply<T, UnitConversionRate<{ scalar10: -12 }>>;
