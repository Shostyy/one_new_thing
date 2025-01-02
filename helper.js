const tooday = Date.now();
const startOf2025 = 1735689600000;
const dayNumber = tooday - 1735689600000;
const MS_IN_DAY = 1000 * 60 * 60 * 24;
const numberOfDaysSinceStartOf2025 = Math.ceil(dayNumber / MS_IN_DAY);
console.log(`Day number ${numberOfDaysSinceStartOf2025}:`);