import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type CubicMeters,
  type Kilograms,
  type KilogramsPerCubicMeter,
} from "#uom-types/units";

type KilogramsPerCubicMeter_DerivedFrom_Kilograms_Per_CubicMeters = DivideUnits<
  Kilograms,
  CubicMeters
>;

expectType<KilogramsPerCubicMeter_DerivedFrom_Kilograms_Per_CubicMeters>(
  0 as KilogramsPerCubicMeter,
);
expectType<KilogramsPerCubicMeter>(
  0 as KilogramsPerCubicMeter_DerivedFrom_Kilograms_Per_CubicMeters,
);
