import moment from "moment";
export default function findDayDifference(date1, date2) {
  var date1 = new Date("06/30/2019");
  var date2 = new Date("07/30/2019");

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;

  //return Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
}
