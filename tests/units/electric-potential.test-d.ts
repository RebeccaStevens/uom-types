import { expectType } from "tsd";

import { type Divide } from "#uom-types";
import { type Amperes, type Watts, type Volts } from "#uom-types/units";

type Volts_DerivedFrom_Watts_Per_Amperes = Divide<Watts, Amperes>;

expectType<Volts_DerivedFrom_Watts_Per_Amperes>(0 as Volts);
expectType<Volts>(0 as Volts_DerivedFrom_Watts_Per_Amperes);
