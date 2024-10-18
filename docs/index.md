# Units of Measure Types

Typesafe units with no runtime overhead.

## Usage

Example:

```ts
import { type Cubic, type Length, type Meter, type Square, mul } from "uom-types";

const width = 5 as Meter;
const height = 3 as Meter;
const area = mul(width, height);
// `area` will be of type `Square<Meter>` which is equivalent to `Unit<{ Meter: 2 }>`.

useArea(area);
useVolume(area); // type error - `Square<Meter>` is not assignable to `Cubic<Length>`.

function useArea<A extends Square<Length>>(area: A) {
  // ...
}

function useVolume<V extends Cubic<Length>>(volume: V) {
  // ...
}
```

### Units

The core type of this library is `Unit`.

A `Unit` is made up of two parts; a `UnitClass`, which is used to determine what a unit is of (for example, length,
volume, mass etc.) and a `UnitMeta`, which states any extra information needed (such as the unit's scale factor).

A unit without a `UnitMeta` is known as an [`AbstractUnit`](#abstract-units).\
A unit without a `UnitClass` is known as a `UnitConversionRate`.

#### Base Units

We define all our `Unit`s from 8 base units. They are the [7 base units of the SI
units](https://en.wikipedia.org/wiki/International_System_of_Units#Base_units) as well as the `radian`.

If you wish to create your own units from the same base units, you can use the `BaseUnitClass` type.

#### Creating Units

Example of defining and using a custom `Health` unit:

```ts
import { type Second, type Unit, mul, sub } from "uom-types";

type Health = Unit<{ HP: 1 }>;
type HealthPerSecond = Unit<{ HP: 1; Second: -1 }>;

let playerHealth = 100 as Health;
const damageRate = 10 as HealthPerSecond;
const duration = 5 as Second;

playerHealth = sub(playerHealth, mul(damageRate, duration));
```

##### `UnitClass` and `UnitMeta` Types

The `UnitClass` and `UnitMeta` types both work in the same way.
They define a unit symbols (aka `UnitSubvalue`s) as keys which map to an `Exponent` value.\
Note: Only integer exponents in range -12 thru 12 are supported.

Example:

Note: These examples types may differ from ones defined in this library.

```ts
// UnitClass
type Time = UnitClass<{ Second: 1 }>; // second^1
type Acceleration = UnitClass<{ Meter: 1; Second: -2 }>; // meter^1 / second^2
type Frequency = UnitClass<{ Second: -1 }>; // 1 / second^1

// UnitMeta
type Kilo = UnitMeta<{ scalar10: 3 }>; // 10^3
type Milli = UnitMeta<{ scalar10: -3 }>; // 1 / 10^3

// Unit (using UnitFrom)
type Second = UnitFrom<Time>;
type KiloMetersPerSecondSquared = UnitFrom<Acceleration, Kilo>;
```

### Abstract Units

An `AbstractUnit` is just a `Unit` that doesn't have any `UnitMeta`.

Example:

```ts
// AbstractUnit
type Time = AbstractUnit<{ Second: 1 }>;

// Unit
type Second = Unit<{ Second: 1 }>;
type Minute = Unit<{ Second: 1 }, { scalar60: 1 }>;
type Hour = Unit<{ Second: 1 }, { scalar60: 2 }>;
```

Here, the 3 `Unit` types `Second`, `Minute` and `Hour` are all subtypes of the abstract unit `Time`.

`AbstractUnit`s are great to use as function parameters so that users aren't lock into having to use a concrete unit type.
They are best used as generics so that the return type can be inferred more accurately.

### Modifiers

This library defines many standard units but other units need to be made using modifiers.

#### General

Square meters can be defined using the `Square` modifier on the `Meter` unit like so: `Square<Meter>`.
Similarly, cubic meters can be defined with `Cubic<Meter>`.

`Reciprocal` can be used to invert a unit. For example `Hertz` can be defined with `Reciprocal<Second>`.

#### Metric

Kilograms can be defined using the `Kilo` modifier on the `Gram` unit like so: `Kilo<Gram>`.
Similarly, millimeters can be defined with `Milli<Meter>`.

#### Branding Compatibility

We provide a `Brand` interface that can be extended to make `uom-types` brands
compatible with 3rd party brands via interface merging.

Here's an example of make `uom-types` compatible with [`effect`](https://www.npmjs.com/package/effect):

```ts
import { Brand } from "effect";

type UomBrand = Brand.Brand<"uom">;
declare module "uom-types" {
  interface Brand extends UomBrand {}
}
```

You can the use `uom-types` types just like `effect`'s branded types.

```ts
import { Brand } from "effect";
import type * as uom from "uom-types";

export type Unitless = uom.Unitless;
export const Unitless = Brand.refined<Unitless>(
  (n) => typeof n === "number",
  (n) => Brand.error(`Expected ${n} to be a number`),
);
```

## Donate

[Any donations would be much appreciated](https://github.com/RebeccaStevens/uom-types/blob/main/DONATIONS.md). 😄

### Enterprise Users

`uom-types` is available as part of the Tidelift Subscription.

Tidelift is working with the maintainers of `uom-types` and a growing network of open source maintainers to ensure your
open source software supply chain meets enterprise standards now and into the future. [Learn
more.](https://tidelift.com/subscription/pkg/npm-uom-types?utm_source=npm-uom-types&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
