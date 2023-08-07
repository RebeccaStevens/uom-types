# Units of Measure Types

Typesafe units with no runtime overhead.

## Usage

Example:

```ts
import { sum, mul, div } from "uom-types/functions";
import { type Metre, type Square, type Cubic, type Reciprocal } from "uom-types/units";

const width = 5 as Metre;
const height = 3 as Metre;
const length = 10 as Metre;

const areaWH = mul(width, height);
const areaLH = mul(legnth, height);
const areaWL = mul(width, legnth);
// each `area` variable will be of type `Square<Metre>`.

const surfaceArea = mul(2, sum(areaWH, areaLH, areaWL));
// `surfaceArea` will also be of type `Square<Metre>`.

const volume = mul(areaWH, length);
// `volume` will be of type `Cubic<Metre>`.

const surfaceAreaToVolumeRatio = div(surfaceArea, volume);
// `surfaceAreaToVolumeRatio` will be of type `Reciprocal<Metre>`.
```

### Generics

You can use `AbstractUnit`s as base types for generic arguments to make functions more general.

For example, here `Length` is being used as the type that has to be passed into the function `calculateSquareArea`.

```ts
import { mul } from "uom-types/functions";
import { type Metre, type Square, type Centi } from "uom-types/units";

function calculateSquareArea<L extends Length>(width: L, height: L) {
  return mul(width, height);
}

// ok
const area = calculateSquareArea(5 as Centi<Metre>, 3 as Centi<Metre>);
// `area` will be of type `Square<Centi<Metre>>` which is equivalent to `Unit<{ Metre: 2 }, { scalar10: -4 }>`.

// compile time error
const mixedUnitArea = calculateSquareArea(5 as Metre, 3 as Centi<Metre>);
```

To allow for mixing units, simply add a second generic:

```ts
import { mul } from "uom-types/functions";
import { type Metre, type Square, type Centi } from "uom-types/units";

function calculateSquareArea<W extends Length, H extends Length>(width: W, height: H) {
  return mul(width, height);
}

// ok
const area = calculateSquareArea(5 as Centi<Metre>, 3 as Centi<Metre>);
// `area` will be of type `Square<Centi<Metre>>` which is equivalent to `Unit<{ Metre: 2 }, { scalar10: -4 }>`.

// ok
const mixedUnitArea = calculateSquareArea(5 as Metre, 3 as Centi<Metre>);
// `mixedUnitArea` will be of type `AreaUnit<{ scalar10: -2 }>` which is equivalent to `Unit<{ Metre: 2 }, { scalar10: -2 }>`.
```

### Creating Units

Example of defining and using a custom `Health` unit:

```ts
import { type Unit } from "uom-types";
import { mul, sub } from "uom-types/functions";
import { type Second } from "uom-types/units";

type Health = Unit<{ HP: 1 }>;
type HealthPerSecond = Unit<{ HP: 1; Second: -1 }>

let playerHealth = 100 as Health;
const damageRate = 10 as HealthPerSecond;
const duration = 5 as Second;

playerHealth = sub(playerHealth, mul(damageRate, duration));
```

## How it Works

The core type of this library is `Unit`.

A `Unit` is made up of two parts; a `UnitClass`, which is used to determine what a unit is of (for example, length, volume, mass etc.)
and a `UnitMeta`, which states any extra information needed (such as the unit's scale factor).

A unit without a `UnitMeta` is known as an `AbstractUnit`.\
A unit without a `UnitClass` is known as a `UnitConversionRate`.

`UnitClass`es and `UnitMeta` types both work in the same way.
They define a unit symbols (aka `UnitSubvalue`s) as keys which map to an `Exponent` value.\
Note: only integer exponents in range -12 thru 12 are supported.

For example:

```ts
type Time = UnitClass<{ Second: 1 }>; // second^1
type Acceleration = UnitClass<{ Metre: 1; Second: -2 }>; // metre^1 / second^2
type Frequency = UnitClass<{ Second: -1 }>; // 1 / second^1

type Kilo = UnitMeta<{ scalar10: 3 }>; // 10^3
type Milli = UnitMeta<{ scalar10: -3 }>; // 1 / 10^3
```

### Base Units

We define all our `Unit`s from 8 base units. They are the [7 base units of the SI units](https://en.wikipedia.org/wiki/International_System_of_Units#Base_units) as well as
the `radian`.

If you wish to create your own units from the same base units, you can use the `BaseUnitClass` type.

## Donate

[Any donations would be much appreciated](https://github.com/RebeccaStevens/uom-types/blob/main/DONATIONS.md). 😄

### Enterprise Users

`uom-types` is available as part of the Tidelift Subscription.

Tidelift is working with the maintainers of `uom-types` and a growing network of open source maintainers to ensure your open source software supply chain meets enterprise standards now and into the future.
[Learn more.](https://tidelift.com/subscription/pkg/npm-uom-types?utm_source=npm-uom-types&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
