import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import {
  type Seconds,
  type Minutes,
  type Hours,
  type Days,
  type Weeks,
  type Years,
} from "#uom-types/units";

/**
 * Convert {@link Seconds} to {@link Minutes}.
 */
export function secondsToMinutes(duration: Seconds): Minutes {
  return div(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Seconds} to {@link Hours}.
 */
export function secondsToHours(duration: Seconds): Hours {
  return div(duration, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link Minutes} to {@link Seconds}.
 */
export function minutesToSeconds(duration: Minutes): Seconds {
  return mul(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Minutes} to {@link Hours}.
 */
export function minutesToHours(duration: Minutes): Hours {
  return div(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Hours} to {@link Seconds}.
 */
export function hoursToSeconds(duration: Hours): Seconds {
  return mul(duration, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link Hours} to {@link Minutes}.
 */
export function hoursToMinutes(duration: Hours): Minutes {
  return mul(duration, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Hours} to {@link Days}.
 */
export function hoursToDays(duration: Hours): Days {
  return div(duration, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link Days} to {@link Hours}.
 */
export function daysToHours(duration: Days): Hours {
  return mul(duration, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link Days} to {@link Weeks}.
 */
export function daysToWeeks(duration: Days): Weeks {
  return div(duration, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link Days} to {@link Years}.
 *
 * This function assume that one year is equal to 365.25 days.
 * Use an actual date/time library if you need more control.
 */
export function daysToYears(duration: Days): Years {
  return div(duration, 365.25 as UnitConversionRate<{ scalarDaysInYear: -1 }>);
}

/**
 * Convert {@link Weeks} to {@link Days}.
 */
export function weeksToDays(duration: Weeks): Days {
  return mul(duration, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link Weeks} to {@link Years}.
 */
export function weeksToYears(duration: Weeks): Years {
  return daysToYears(weeksToDays(duration));
}

/**
 * Convert {@link Years} to {@link Days}.
 *
 * This function assume that one year is equal to 365.25 days.
 * Use an actual date/time library if you need more control.
 */
export function yearsToDays(duration: Years): Days {
  return mul(duration, 365.25 as UnitConversionRate<{ scalarDaysInYear: -1 }>);
}

/**
 * Convert {@link Years} to {@link Weeks}.
 */
export function yearsToWeeks(duration: Years): Weeks {
  return daysToWeeks(yearsToDays(duration));
}
