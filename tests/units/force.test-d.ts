import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type Gram,
  type Kilo,
  type MetrePerSecondSquared,
  type Newton,
} from "#uom-types/units";

type Newton_DerivedFrom_Kilogram_By_MetrePerSquareSecond = MultiplyUnits<
  Kilo<Gram>,
  MetrePerSecondSquared
>;

expectType<Newton_DerivedFrom_Kilogram_By_MetrePerSquareSecond>(0 as Newton);
expectType<Newton>(0 as Newton_DerivedFrom_Kilogram_By_MetrePerSquareSecond);
