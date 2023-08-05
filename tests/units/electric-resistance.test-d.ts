import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import { type Ampere, type Ohm, type Volt } from "#uom-types/units";

type Ohm_DerivedFrom_Volt_Per_Ampere = DivideUnits<Volt, Ampere>;

expectType<Ohm_DerivedFrom_Volt_Per_Ampere>(0 as Ohm);
expectType<Ohm>(0 as Ohm_DerivedFrom_Volt_Per_Ampere);
