# Changelog
All notable changes to this project will be documented in this file. Dates are displayed in UTC.

# [5.0.0](https://github.com/RebeccaStevens/uom-types/compare/v4.1.2...v5.0.0) (2024-11-27)


### Features

* drop support for node 16 ([c701cf3](https://github.com/RebeccaStevens/uom-types/commit/c701cf37a8b433bf5daa3269a6c5c00a66f8361a))


### BREAKING CHANGES

* drop support for node 16

## [4.1.2](https://github.com/RebeccaStevens/uom-types/compare/v4.1.1...v4.1.2) (2024-10-18)


### Bug Fixes

* extend branding interface to unit-keys-value ([165603c](https://github.com/RebeccaStevens/uom-types/commit/165603c1fe9beaf2c523218e78778ee152fc7c87))

## [4.1.1](https://github.com/RebeccaStevens/uom-types/compare/v4.1.0...v4.1.1) (2024-10-18)


### Bug Fixes

* improve handling of unitless with pow/root functions ([ad44cf3](https://github.com/RebeccaStevens/uom-types/commit/ad44cf3accf48207391c2d55b7c10f723b0dad19))

# [4.1.0](https://github.com/RebeccaStevens/uom-types/compare/v4.0.1...v4.1.0) (2024-10-18)


### Features

* add ability to make brands compatible with 3rd party brands ([9f7d4cd](https://github.com/RebeccaStevens/uom-types/commit/9f7d4cd4c85bd534db93d4f4457217a43511dc0f))

## [4.0.1](https://github.com/RebeccaStevens/uom-types/compare/v4.0.0...v4.0.1) (2024-10-14)

# [4.0.0](https://github.com/RebeccaStevens/uom-types/compare/v3.1.1...v4.0.0) (2024-10-14)


### Bug Fixes

* remove things labelled deprecated ([a74dd3d](https://github.com/RebeccaStevens/uom-types/commit/a74dd3d5b845ac550a09364c65bb0a704536ded1))
* use US english spelling for units ([37d070f](https://github.com/RebeccaStevens/uom-types/commit/37d070f311389808683a37ba16b46167a3ea5c2a))
* WattPerSteradianquareMeter => WattPerSteradianSquareMeter ([30639fe](https://github.com/RebeccaStevens/uom-types/commit/30639fe795ecc2357d59b67fdb774b23d98baf56))


### Features

* merge all subpackages into toplevel package ([90525a2](https://github.com/RebeccaStevens/uom-types/commit/90525a23537bb37fd97db08215aee2bb92bb79e5))
* merge high-order functions into regular functions ([67ecca0](https://github.com/RebeccaStevens/uom-types/commit/67ecca0b8c6e83dbb932d026eaf3cdc30ab54816))


### Performance Improvements

* improve type speed ([10a86df](https://github.com/RebeccaStevens/uom-types/commit/10a86dfebce3fbb8fed0f13ca8d841191d4a4a83))


### BREAKING CHANGES

* remove things labelled deprecated
* WattPerSteradianquareMeter => WattPerSteradianSquareMeter
* Metre => Meter, Litre => Liter

## [3.1.1](https://github.com/RebeccaStevens/uom-types/compare/v3.1.0...v3.1.1) (2023-08-11)


### Bug Fixes

* improve core unit and prefix logic ([9bf4c9f](https://github.com/RebeccaStevens/uom-types/commit/9bf4c9f92609177b37ebc157dfc0d819e5eac995))
* improve modifer logic ([673f0b4](https://github.com/RebeccaStevens/uom-types/commit/673f0b44d277e3b7c188a01338e8e88d7bb2cd69))
* improve unit function logic ([1350c8e](https://github.com/RebeccaStevens/uom-types/commit/1350c8ee2150553abb59a13658fc5279ecae89a7))
* update UnitConversionRate type and create UnknownUnitConversionRate type ([ee942be](https://github.com/RebeccaStevens/uom-types/commit/ee942bed8a8c31101474c28f92b1cfede2f9d629))

# [3.1.0](https://github.com/RebeccaStevens/uom-types/compare/v3.0.1...v3.1.0) (2023-08-09)


### Bug Fixes

* `Pow` and `Root` now ensure that zero exponents are removed ([0929ef3](https://github.com/RebeccaStevens/uom-types/commit/0929ef3bfc113c50028bf87060c98a07efde9cd4))


### Features

* add `root` functions ([6d92a98](https://github.com/RebeccaStevens/uom-types/commit/6d92a9818fe99c43a22801c4e2e2dffc1167fe8f))
* add PosExponent and NegExponent and depreate NegativeExponent infavor of NegateExponent ([f3e96e1](https://github.com/RebeccaStevens/uom-types/commit/f3e96e1d4c2035464399bb0a6d40dd6c5b9df8fd))
* add Unit Functions Pow and Root ([ae679dc](https://github.com/RebeccaStevens/uom-types/commit/ae679dc18d59c6a71dca7841271537a2bb7f1671))

## [3.0.1](https://github.com/RebeccaStevens/uom-types/compare/v3.0.0...v3.0.1) (2023-08-08)


### Bug Fixes

* multiplyUnitExponents and DivideUnitExponents support for AbstractUnit ([#52](https://github.com/RebeccaStevens/uom-types/issues/52)) ([88fce9e](https://github.com/RebeccaStevens/uom-types/commit/88fce9e9563f2f25bb9f53f58fde12d8aec3eaad))

# [3.0.0](https://github.com/RebeccaStevens/uom-types/compare/v2.0.0...v3.0.0) (2023-08-07)


* Merge pull request #3 from RebeccaStevens/uom-types ([d6f0c76](https://github.com/RebeccaStevens/uom-types/commit/d6f0c7641ec072388c336b4547862e73f8fefc42)), closes [#3](https://github.com/RebeccaStevens/uom-types/issues/3)


### BREAKING CHANGES

* Extra details of a unit, such as its scalar factor, are now stored as part of the unit's meta, not on a subcomponent of the unit.
* "si-units" submodule removed. It has been replaced by "units".

# [2.0.0](https://github.com/RebeccaStevens/uom-types/compare/v1.0.3...v2.0.0) (2023-07-08)


### Bug Fixes

* type issues found from tests ([6f15ac9](https://github.com/RebeccaStevens/uom-types/commit/6f15ac92642ef6e22a7de11667add3bf398beee1))


* Merge pull request #2 from RebeccaStevens/type-tests ([4b590d3](https://github.com/RebeccaStevens/uom-types/commit/4b590d30a7e2a3e509c5200740db54dd05720b57)), closes [#2](https://github.com/RebeccaStevens/uom-types/issues/2)


### BREAKING CHANGES

* drop product function

## [1.0.3](https://github.com/RebeccaStevens/uom-types/compare/v1.0.2...v1.0.3) (2023-07-07)


### Bug Fixes

* re-fix dist file import paths ([137b8df](https://github.com/RebeccaStevens/uom-types/commit/137b8dff09690891e041be0ff8933e94e10a9451))

## [1.0.2](https://github.com/RebeccaStevens/uom-types/compare/v1.0.1...v1.0.2) (2023-07-07)


### Bug Fixes

* dist file import paths ([7fcf7b7](https://github.com/RebeccaStevens/uom-types/commit/7fcf7b74cbe18dd8ff9c87348294cc1caecd8933))

## [1.0.1](https://github.com/RebeccaStevens/uom-types/compare/v1.0.0...v1.0.1) (2023-07-07)


### Bug Fixes

* critical type bugs ([46ef7b9](https://github.com/RebeccaStevens/uom-types/commit/46ef7b928dbf217bf660af48a560ea7d0759c882))


### Reverts

* Revert "build: package.json" ([142c812](https://github.com/RebeccaStevens/uom-types/commit/142c81245086ff76aa22b477292df70159cd0674))

# 1.0.0 (2023-07-06)


### Features

* initial implementation ([3547c44](https://github.com/RebeccaStevens/uom-types/commit/3547c4483ac747c2884b2284df4b81161ff18ac9))
