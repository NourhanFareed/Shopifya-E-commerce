/* eslint-disable no-unused-vars */
export function dateFormate(date) {
  let targetDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    targetDate
  );
  return formattedDate;
}
