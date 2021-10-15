const HOURS_PER_DAY = 8;
const DAYS_PER_MONTH = 22;

export function dayRate(ratePerHour) {
  return HOURS_PER_DAY * ratePerHour;
}

export function monthRate(ratePerHour, discount) {
  var totalRate = DAYS_PER_MONTH * HOURS_PER_DAY * ratePerHour;
  return Math.ceil(applyDiscount(totalRate, discount));
}

export function daysInBudget(budget, ratePerHour, discount) {
  var perDayRate = HOURS_PER_DAY * ratePerHour;
  var discountedDailyRate = applyDiscount(perDayRate, discount);
  return Math.floor(budget / discountedDailyRate);
}

function applyDiscount(value, percentage) {
  return value * (1-percentage);
}
