function countingSundays(firstYear, lastYear) {
  let count=0, year=1900, month=1, current=1, monthCount = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  while (year<=lastYear) {
    current+=monthCount[month];
    if (month==2 && year%4==0 && ( year%100!=0 || year%400==0)) current++;
    month++;
    if (month==13) {
      month = 1;
      year++;
    }
    if (current%7==0 && year>=firstYear && year<=lastYear) count++;
  }
  return count;
}

function main(n) { 
	let arr = n.split(',');
	if (arr.length==2) return countingSundays(arr[0],arr[1]);
}