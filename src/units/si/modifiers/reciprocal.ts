import {
  type InverseUnit,
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
  InverseUnit<T>;
