export function createTimeDate(timeString: string) {
  let date = new Date();
  let timeParts = timeString.split(':');
  date.setHours(Number(timeParts[0])); 
  date.setMinutes(Number(timeParts[1]));
  return date;
}