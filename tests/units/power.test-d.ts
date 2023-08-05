import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import { type Second, type Watt, type Joule } from "#uom-types/units";

type Watt_DerivedFrom_Joule_Per_Second = DivideUnits<Joule, Second>;

expectType<Watt_DerivedFrom_Joule_Per_Second>(0 as Watt);
expectType<Watt>(0 as Watt_DerivedFrom_Joule_Per_Second);
