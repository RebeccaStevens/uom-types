import { expectAssignable } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import { type Candela, type Steradian, type Lumen } from "#uom-types/units";

type Lumen_DerivedFrom_Candela_Steradian = MultiplyUnits<Candela, Steradian>;

expectAssignable<Lumen_DerivedFrom_Candela_Steradian>(0 as Lumen);
expectAssignable<Lumen>(0 as Lumen_DerivedFrom_Candela_Steradian);
