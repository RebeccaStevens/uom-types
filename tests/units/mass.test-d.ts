import { expectType } from "tsd";

import {
  type Kilo,
  type Kilograms,
  type Grams,
  type Milli,
} from "#uom-types/units";

type Kilograms_DerivedFrom_Kilo_Grams = Kilo<Grams>;

expectType<Kilograms_DerivedFrom_Kilo_Grams>(0 as Kilograms);
expectType<Kilograms>(0 as Kilograms_DerivedFrom_Kilo_Grams);

type Grams_DerivedFrom_MilliKilograms = Milli<Kilograms>;

expectType<Grams_DerivedFrom_MilliKilograms>(0 as Grams);
expectType<Grams>(0 as Grams_DerivedFrom_MilliKilograms);
