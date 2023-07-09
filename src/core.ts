import { type Exponent } from "./exponents";
import { type BrandUnit } from "./utils";

/**
 * A unit of measurement.
 */
export type Unit<T extends Record<string, Exponent>> = number &
  Readonly<BrandUnit<T>>;

export type UnknownUnit = number &
  Readonly<{
    __uom_types: Record<string, {}>;
  }>;
