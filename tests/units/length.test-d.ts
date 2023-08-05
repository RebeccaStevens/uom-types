import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type SquareMetre,
  type Micro,
  type Milli,
  type Metre,
  type Length,
  type Area,
} from "#uom-types/units";

expectType<Area>(0 as MultiplyUnits<Length, Length>);

expectType<Milli<SquareMetre>>(0 as MultiplyUnits<Metre, Milli<Metre>>);

expectType<Micro<SquareMetre>>(0 as MultiplyUnits<Milli<Metre>, Milli<Metre>>);
