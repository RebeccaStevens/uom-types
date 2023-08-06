import { expectType } from "tsd";

import { type Kilo, type Gram, type Milli } from "#uom-types/units";

type Kilogram_DerivedFrom_Kilo_Gram = Kilo<Gram>;

expectType<Kilogram_DerivedFrom_Kilo_Gram>(0 as Kilo<Gram>);
expectType<Kilo<Gram>>(0 as Kilogram_DerivedFrom_Kilo_Gram);

type Gram_DerivedFrom_MilliKilogram = Milli<Kilo<Gram>>;

expectType<Gram_DerivedFrom_MilliKilogram>(0 as Gram);
expectType<Gram>(0 as Gram_DerivedFrom_MilliKilogram);
