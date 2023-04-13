export const convertDateTime = (timestamp: string | number | Date) => {
  //2023-04-11T15:28:44.981Z
  const formatted = new Date(timestamp).toString();
  const timeFormat = formatted.slice(16, 21);
  //Tue Apr 11 2023 10:28:44 GMT-0500 (Central Daylight Time)
  return `${formatted.slice(0, 16)} at ${timeFormat}`;
  //21
};
