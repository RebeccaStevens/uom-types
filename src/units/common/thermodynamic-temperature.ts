import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type TemperatureUnitClass = BaseUnitClass<{
  Kelvin: 1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type Temperature = AbstractUnitFrom<TemperatureUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureUnit<M extends UnitSubvalues> = TemperatureUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  TemperatureUnitClass,
  M
>;

/**
 * A unit of {@link Temperature}.
 *
 * @group Units
 * @category Base
 * @category Thermodynamic
 * @symbol `K`
 */
export type Kelvin = TemperatureUnit<{}>;

/**
 * A unit of {@link Temperature}.
 *
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `℃`
 */
export type Celsius = TemperatureUnit<{ "offset273.15": 1 }>;
