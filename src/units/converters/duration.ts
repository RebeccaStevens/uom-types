import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import {
  type Second,
  type Minute,
  type Hour,
  type Day,
  type Week,
  type Year,
} from "#uom-types/units";

/**
 * Convert {@link Second} to {@link Minute}.
 */
export function secondToMinute(duration: Second): Minute {
  return div(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Second} to {@link Hour}.
 */
export function secondToHour(duration: Second): Hour {
  return div(duration, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link Minute} to {@link Second}.
 */
export function MinuteToSecond(duration: Minute): Second {
  return mul(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Minute} to {@link Hour}.
 */
export function MinuteToHour(duration: Minute): Hour {
  return div(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Hour} to {@link Second}.
 */
export function HourToSecond(duration: Hour): Second {
  return mul(duration, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link Hour} to {@link Minute}.
 */
export function HourToMinute(duration: Hour): Minute {
  return mul(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Hour} to {@link Day}.
 */
export function HourToDay(duration: Hour): Day {
  return div(duration, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link Day} to {@link Hour}.
 */
export function DayToHour(duration: Day): Hour {
  return mul(duration, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link Day} to {@link Week}.
 */
export function DayToWeek(duration: Day): Week {
  return div(duration, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link Day} to {@link Year}.
 *
 * This function assume that one year is equal to 365.25 Day.
 * Use an actual date/time library if you need more control.
 */
export function DayToYear(duration: Day): Year {
  return div(duration, 365.25 as UnitConversionRate<{ scalarDayInYear: -1 }>);
}

/**
 * Convert {@link Week} to {@link Day}.
 */
export function WeekToDay(duration: Week): Day {
  return mul(duration, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link Week} to {@link Year}.
 */
export function WeekToYear(duration: Week): Year {
  return DayToYear(WeekToDay(duration));
}

/**
 * Convert {@link Year} to {@link Day}.
 *
 * This function assume that one year is equal to 365.25 Day.
 * Use an actual date/time library if you need more control.
 */
export function YearToDay(duration: Year): Day {
  return mul(duration, 365.25 as UnitConversionRate<{ scalarDayInYear: -1 }>);
}

/**
 * Convert {@link Year} to {@link Week}.
 */
export function YearToWeek(duration: Year): Week {
  return DayToWeek(YearToDay(duration));
}
