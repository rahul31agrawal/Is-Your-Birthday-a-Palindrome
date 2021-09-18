function reverseStr(str) {
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;
}

function isPalindrome(str) {
    var reversedStr = reverseStr(str);
    return str === reversedStr;
}



function converDateToStr(date){
    var dateStr = {day:'', month:'',year:''};
    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }else{
        dateStr.day = date.day.toString();
    }


    if(date.month < 10){
        dateStr.month = '0' + date.month;
    }else{
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();
    return dateStr;
}

function getAllDateFormate(date){
    // var dateStr = converDateToStr(date);

    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yymmdd = date.year.slice(-2) + date.month + date.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}


function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormate(date);
    
    var flag = false;

    for(var i=0; i < listOfPalindromes.length; i++){

        if(isPalindrome(listOfPalindromes[i])){
            flag = true;
            break;
        }
    }
    return flag;
}

function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    if(year % 100 === 0) {
        return false;
    }
    if(year % 4 ===0){

        return true;
    }
    return false;
}



function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month === 2){
        // check for leap year
        if(isLeapYear(year)){
            if(day > 29){
                day = 1;
                month++;
            }

        }else{

            if(day > 28){
                day = 1;
                month++;
            }
        }
    }else{
        if(day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if(month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };

}


function getNextPalindromeDate(date){

}


var date = {

    day:31,
    month:1,
    year: 2020
};

console.log(getNextDate(date));