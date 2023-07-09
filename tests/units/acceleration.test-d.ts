import { expectType } from "tsd";

import { type DivideUnit } from "#uom-types";
import {
  type Meters,
  type MetersPerSecond,
  type MetersPerSecondPerSecond,
  type Seconds,
} from "#uom-types/units";

type MetersPerSecondPerSecond_DerivedFrom_Meters_Per_Second_Per_Second =
  DivideUnit<DivideUnit<Meters, Seconds>, Seconds>;

expectType<MetersPerSecondPerSecond_DerivedFrom_Meters_Per_Second_Per_Second>(
  0 as MetersPerSecondPerSecond,
);
expectType<MetersPerSecondPerSecond>(
  0 as MetersPerSecondPerSecond_DerivedFrom_Meters_Per_Second_Per_Second,
);

type MetersPerSecondPerSecond_DerivedFrom_MetersPerSecond_Per_Second =
  DivideUnit<MetersPerSecond, Seconds>;

expectType<MetersPerSecondPerSecond_DerivedFrom_MetersPerSecond_Per_Second>(
  0 as MetersPerSecondPerSecond,
);
expectType<MetersPerSecondPerSecond>(
  0 as MetersPerSecondPerSecond_DerivedFrom_MetersPerSecond_Per_Second,
);
