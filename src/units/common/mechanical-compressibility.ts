import type { UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Reciprocal } from "../modifiers/index.ts";

import type { Pressure, PressureUnitClass } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type CompressibilityUnitClass = Reciprocal<PressureUnitClass>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Compressibility = Reciprocal<Pressure>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type CompressibilityUnit<M extends UnitSubvalues> = CompressibilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type CompressibilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<CompressibilityUnitClass, M>;
