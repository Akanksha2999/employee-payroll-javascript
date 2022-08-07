const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage is :" + empWage);

//UC_7A - Calc total wage using array forEach traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - ForEach -> Total Days :" + totalWorkingDays + " Total Hrs :" + totalEmpHrs + " Emp Wage is " + totalEmpWage);

//Reduse Method  
function totalWages(totalEmpWage, dailyWage) {
    return totalEmpWage + dailyWage;
}
console.log("UC7A - Emp wage with reduce:" + empDailyWageArr.reduce(totalWages, 0));

//UC_7B - Show the day along with daily wage using array map helper function
let dailyCount = 0;
function mapDayWithWage(dailyWage) {
    dailyCount++;
    return dailyCount + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage is :" + mapDayWithWageArr);

//UC_7C - Show Days when full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily wage filter when full time wage earned : " + fullDayWageArr);

//UC_7D - Find the first Occurance when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time fulltime wage was earned on day: " + mapDayWithWageArr.find(findFullTimeWage));

//UC_7E - Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check all the element have fullTime wage : " + fullDayWageArr.every(isAllFullTimeWage));

//UC_7F - Check if there is any Part time wage 
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F - Check if any part time wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC_7G - Find the number Of days the employee worked
function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}
console.log("UC7G - Number of days employee worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));
