import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/math";
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
export function secondsToMinutes(duration: Second): Minute {
  return div(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Second} to {@link Hour}.
 */
export function secondsToHours(duration: Second): Hour {
  return div(duration, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link Minute} to {@link Second}.
 */
export function minutesToSeconds(duration: Minute): Second {
  return mul(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Minute} to {@link Hour}.
 */
export function minutesToHours(duration: Minute): Hour {
  return div(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Hour} to {@link Second}.
 */
export function hoursToSeconds(duration: Hour): Second {
  return mul(duration, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link Hour} to {@link Minute}.
 */
export function hoursToMinutes(duration: Hour): Minute {
  return mul(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Hour} to {@link Day}.
 */
export function hoursToDays(duration: Hour): Day {
  return div(duration, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link Day} to {@link Hour}.
 */
export function daysToHours(duration: Day): Hour {
  return mul(duration, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link Day} to {@link Week}.
 */
export function daysToWeeks(duration: Day): Week {
  return div(duration, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link Day} to {@link Year}.
 *
 * This function assume that one year is equal to 365.25 Day.
 * Use an actual date/time library if you need more control.
 */
export function daysToYears(duration: Day): Year {
  return div(duration, 365.25 as UnitConversionRate<{ scalarDayInYear: -1 }>);
}

/**
 * Convert {@link Week} to {@link Day}.
 */
export function weeksToDays(duration: Week): Day {
  return mul(duration, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link Week} to {@link Year}.
 */
export function weeksToYears(duration: Week): Year {
  return daysToYears(weeksToDays(duration));
}

/**
 * Convert {@link Year} to {@link Day}.
 *
 * This function assume that one year is equal to 365.25 Day.
 * Use an actual date/time library if you need more control.
 */
export function yearsToDays(duration: Year): Day {
  return mul(duration, 365.25 as UnitConversionRate<{ scalarDayInYear: -1 }>);
}

/**
 * Convert {@link Year} to {@link Week}.
 */
export function yearsToWeeks(duration: Year): Week {
  return daysToWeeks(yearsToDays(duration));
}
