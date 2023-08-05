import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type Metre,
  type MetrePerSecond,
  type MetrePerSecondSquared,
  type Second,
} from "#uom-types/units";

type MetrePerSquareSecond_DerivedFrom_Metre_Per_Second_Per_Second = DivideUnits<
  DivideUnits<Metre, Second>,
  Second
>;

expectType<MetrePerSquareSecond_DerivedFrom_Metre_Per_Second_Per_Second>(
  0 as MetrePerSecondSquared,
);
expectType<MetrePerSecondSquared>(
  0 as MetrePerSquareSecond_DerivedFrom_Metre_Per_Second_Per_Second,
);

type MetrePerSquareSecond_DerivedFrom_MetrePerSecond_Per_Second = DivideUnits<
  MetrePerSecond,
  Second
>;

expectType<MetrePerSquareSecond_DerivedFrom_MetrePerSecond_Per_Second>(
  0 as MetrePerSecondSquared,
);
expectType<MetrePerSecondSquared>(
  0 as MetrePerSquareSecond_DerivedFrom_MetrePerSecond_Per_Second,
);
