import type { UnitConversionRate } from "../../core.ts";
import { div, mul } from "../../math/index.ts";
import type { Hertz, PerDay, PerHour, PerMinute, PerWeek, PerYear } from "../common/index.ts";

/**
 * Convert {@link Hertz} to {@link PerMinute}.
 */
export function hertzToPerMinute(frequency: Hertz): PerMinute {
  return mul(frequency, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Hertz} to {@link PerHour}.
 */
export function hertzToPerHour(frequency: Hertz): PerHour {
  return mul(frequency, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link PerMinute} to {@link Hertz}.
 */
export function perMinuteToHertz(frequency: PerMinute): Hertz {
  return div(frequency, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link PerMinute} to {@link PerHour}.
 */
export function perMinuteToPerHour(frequency: PerMinute): PerHour {
  return mul(frequency, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link PerHour} to {@link Hertz}.
 */
export function perHourToHertz(frequency: PerHour): Hertz {
  return div(frequency, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link PerHour} to {@link PerMinute}.
 */
export function perHourToPerMinute(frequency: PerHour): PerMinute {
  return div(frequency, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link PerHour} to {@link PerDay}.
 */
export function perHourToPerDay(frequency: PerHour): PerDay {
  return mul(frequency, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link PerDay} to {@link PerHour}.
 */
export function perDayToPerHour(frequency: PerDay): PerHour {
  return div(frequency, 24 as UnitConversionRate<{ scalar24: -1 }>);
}

/**
 * Convert {@link PerDay} to {@link PerWeek}.
 */
export function perDayToPerWeek(frequency: PerDay): PerWeek {
  return mul(frequency, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link PerDay} to {@link PerYear}.
 *
 * This function assume that one year is equal to 365.25 Day.
 * Use an actual date/time library if you need more control.
 */
export function perDayToPerYear(frequency: PerDay): PerYear {
  return mul(frequency, 365.25 as UnitConversionRate<{ scalarDayInYear: -1 }>);
}

/**
 * Convert {@link PerWeek} to {@link PerDay}.
 */
export function perWeekToPerDay(frequency: PerWeek): PerDay {
  return div(frequency, 7 as UnitConversionRate<{ scalar7: -1 }>);
}

/**
 * Convert {@link PerWeek} to {@link PerYear}.
 */
export function perWeekToPerYear(frequency: PerWeek): PerYear {
  return perDayToPerYear(perWeekToPerDay(frequency));
}

/**
 * Convert {@link PerYear} to {@link PerDay}.
 *
 * This function assume that one year is equal to 365.25 Day.
 * Use an actual date/time library if you need more control.
 */
export function perYearToPerDay(frequency: PerYear): PerDay {
  return div(frequency, 365.25 as UnitConversionRate<{ scalarDayInYear: -1 }>);
}

/**
 * Convert {@link PerYear} to {@link PerWeek}.
 */
export function perYearToPerWeek(frequency: PerYear): PerWeek {
  return perDayToPerWeek(perYearToPerDay(frequency));
}
