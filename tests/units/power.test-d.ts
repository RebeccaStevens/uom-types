import { expectType } from "tsd";

import { type DivideUnit } from "#uom-types";
import { type Seconds, type Watts, type Joules } from "#uom-types/units";

type Watts_DerivedFrom_Joules_Per_Second = DivideUnit<Joules, Seconds>;

expectType<Watts_DerivedFrom_Joules_Per_Second>(0 as Watts);
expectType<Watts>(0 as Watts_DerivedFrom_Joules_Per_Second);
