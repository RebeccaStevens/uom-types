import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import { type Ampere, type Watt, type Volt } from "#uom-types/units";

type Volt_DerivedFrom_Watt_Per_Ampere = DivideUnits<Watt, Ampere>;

expectType<Volt_DerivedFrom_Watt_Per_Ampere>(0 as Volt);
expectType<Volt>(0 as Volt_DerivedFrom_Watt_Per_Ampere);
