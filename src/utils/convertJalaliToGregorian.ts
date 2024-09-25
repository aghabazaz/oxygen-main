// dateUtils.ts
import jalaali from "jalaali-js";

export function convertJalaliToGregorian(jalaliDateStr: string): string {
  // Parse the Jalali date string
  const [jalaliDate, time] = jalaliDateStr.split(" ");
  const [jy, jm, jd] = jalaliDate.split("-").map(Number);
  const [hours, minutes, seconds] = time.split(":").map(Number);

  // Convert Jalali date to Gregorian date
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd);

  // Create a JavaScript Date object with the Gregorian date and time
  const gregorianDate = new Date(
    Date.UTC(gy, gm - 1, gd, hours, minutes, seconds)
  );

  // Format the date in en-US locale
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  };

  const formattedDate = gregorianDate.toLocaleString("en-US", options);

  return formattedDate;
}
