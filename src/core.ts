import { type Exponent } from "./exponents";
import { type BrandUnit } from "./utils";

export type UnitFull<T extends Record<string, UnitValue>> = number &
  Readonly<BrandUnit<T>>;

export type UnitValue = { exponent: Exponent } & Record<string, Exponent>;

/**
 * A unit of measurement.
 */
export type Unit<T extends Record<string, Exponent | UnitValue>> = UnitFull<{
  [K in keyof T]: T[K] extends Exponent
    ? {
        exponent: T[K];
      }
    : T[K] extends UnitValue
    ? T[K]
    : never;
}>;

export type UnknownUnit = number &
  Readonly<{
    __exactKeys: string;
    __uom_types: Record<string, {}>;
  }>;
