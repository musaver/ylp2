const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { year: y ?? 0, month: (m ?? 1) - 1, day: d ?? 1 };
}

/** "2026-03-28" -> "Mar 28" (event cards). */
export function formatDayMonth(iso: string): string {
  const { month, day } = parts(iso);
  return `${MONTHS_SHORT[month]} ${day}`;
}

/** "2026-03-28" -> "Mar 28, 2026" (event detail). */
export function formatShortDate(iso: string): string {
  const { year, month, day } = parts(iso);
  return `${MONTHS_SHORT[month]} ${day}, ${year}`;
}

/** "2026-04-02" -> "April 2, 2026" (resource detail). */
export function formatLongDate(iso: string): string {
  const { year, month, day } = parts(iso);
  return `${MONTHS_LONG[month]} ${day}, ${year}`;
}
