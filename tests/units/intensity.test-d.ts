import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type Watts,
  type WattsPerSquareMeter,
  type SquareMeters,
} from "#uom-types/units";

type WattsPerSquareMeter_DerivedFrom_Joules_Per_Second = DivideUnits<
  Watts,
  SquareMeters
>;

expectType<WattsPerSquareMeter_DerivedFrom_Joules_Per_Second>(
  0 as WattsPerSquareMeter,
);
expectType<WattsPerSquareMeter>(
  0 as WattsPerSquareMeter_DerivedFrom_Joules_Per_Second,
);
