import type {
  Unit, // eslint-disable-line ts/no-unused-vars
  UnitClass,
  UnitMeta,
  UnknownAbstractUnit,
  UnknownUnit,
  UnknownUnitClass,
  UnknownUnitConversionRate,
  UnknownUnitMeta,
} from "../../core.ts";
import type { Pow, PowUnitSubvalues } from "../../units-operations/index.ts";

/**
 * Put the given {@link Unit} to the power of 2.
 *
 * @group Modifiers
 * @category General
 * @see {@link Pow}
 * @see {@link Cubic}
 */
export type Square<
  T extends UnknownUnit | UnknownAbstractUnit | UnknownUnitConversionRate | UnknownUnitClass | UnknownUnitMeta,
> = T extends number
  ? Pow<T, 2>
  : T extends UnknownUnitClass
    ? UnitClass<PowUnitSubvalues<T["__uom_types"]["value"], 2>>
    : T extends UnknownUnitMeta
      ? UnitMeta<PowUnitSubvalues<T["__uom_types"]["value"], 2>>
      : never;

/**
 * Put the given {@link Unit} to the power of 3.
 *
 * @group Modifiers
 * @category General
 * @see {@link Pow}
 * @see {@link Square}
 */
export type Cubic<
  T extends UnknownUnit | UnknownAbstractUnit | UnknownUnitConversionRate | UnknownUnitClass | UnknownUnitMeta,
> = T extends number
  ? Pow<T, 3>
  : T extends UnknownUnitClass
    ? UnitClass<PowUnitSubvalues<T["__uom_types"]["value"], 3>>
    : T extends UnknownUnitMeta
      ? UnitMeta<PowUnitSubvalues<T["__uom_types"]["value"], 3>>
      : never;
