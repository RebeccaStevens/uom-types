import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type Metre,
  type Newton,
  type Watt,
  type Second,
  type Joule,
} from "#uom-types/units";

type Joule_DerivedFrom_Newton_By_Metre = MultiplyUnits<Newton, Metre>;

expectType<Joule_DerivedFrom_Newton_By_Metre>(0 as Joule);
expectType<Joule>(0 as Joule_DerivedFrom_Newton_By_Metre);

type Joule_DerivedFrom_Watt_By_Second = MultiplyUnits<Watt, Second>;

expectType<Joule_DerivedFrom_Watt_By_Second>(0 as Joule);
expectType<Joule>(0 as Joule_DerivedFrom_Watt_By_Second);
