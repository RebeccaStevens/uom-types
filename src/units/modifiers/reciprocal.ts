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
import type { Inverse, InverseUnitSubvalues } from "../../units-operations/index.ts";

/**
 * Invert the {@link Unit}.
 *
 * @group Modifiers
 * @category General
 */
export type Reciprocal<
  T extends UnknownUnit | UnknownAbstractUnit | UnknownUnitConversionRate | UnknownUnitClass | UnknownUnitMeta,
> = T extends number
  ? Inverse<T>
  : T extends UnknownUnitClass
    ? UnitClass<InverseUnitSubvalues<T["__uom_types"]["value"]>>
    : T extends UnknownUnitMeta
      ? UnitMeta<InverseUnitSubvalues<T["__uom_types"]["value"]>>
      : never;
