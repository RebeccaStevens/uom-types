import { expectAssignable } from "tsd";

import { type MultiplyUnit } from "#uom-types";
import { type Candelas, type Steradians, type Lumens } from "#uom-types/units";

type Lumens_DerivedFrom_Candelas_Steradians = MultiplyUnit<
  Candelas,
  Steradians
>;

expectAssignable<Lumens_DerivedFrom_Candelas_Steradians>(0 as Lumens);
expectAssignable<Lumens>(0 as Lumens_DerivedFrom_Candelas_Steradians);
