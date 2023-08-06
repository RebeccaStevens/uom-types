import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type Square,
  type Micro,
  type Milli,
  type Metre,
  type Length,
  type Area,
} from "#uom-types/units";

expectType<Area>(0 as MultiplyUnits<Length, Length>);

expectType<Milli<Square<Metre>>>(0 as MultiplyUnits<Metre, Milli<Metre>>);

expectType<Micro<Square<Metre>>>(
  0 as MultiplyUnits<Milli<Metre>, Milli<Metre>>,
);
