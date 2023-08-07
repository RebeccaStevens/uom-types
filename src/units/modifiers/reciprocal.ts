import {
  type UnitClass,
  type InverseUnitSubvalues,
  type UnknownUnitClass,
  type Inverse,
  type UnknownAbstractUnit,
  type UnknownUnit,
  type Unit,
} from "#uom-types";

/**
 * Invert the {@link Unit}.
 *
 * @group Modifiers
 * @category General
 */
export type Reciprocal<T extends UnknownAbstractUnit | UnknownUnit> =
  Inverse<T>;

/**
 * Invert the {@link UnitClass}.
 *
 * @group Unit Class Modifiers
 * @category General
 */
export type ReciprocalUnitClass<T extends UnknownUnitClass> = UnitClass<
  InverseUnitSubvalues<T["__uom_types__value"]>
>;
