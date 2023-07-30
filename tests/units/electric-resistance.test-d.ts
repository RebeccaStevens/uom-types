import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import { type Amperes, type Ohms, type Volts } from "#uom-types/units";

type Ohms_DerivedFrom_Volts_Per_Amperes = DivideUnits<Volts, Amperes>;

expectType<Ohms_DerivedFrom_Volts_Per_Amperes>(0 as Ohms);
expectType<Ohms>(0 as Ohms_DerivedFrom_Volts_Per_Amperes);
