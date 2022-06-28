$(function () {
    let time = new Date;  

    function toMonthName(monthNumber) {
        time.setMonth(monthNumber);

        return time.toLocaleString('en-US', {
            month: 'long',
        });
    }

    let day = time.getDate();
    let Month = time.getMonth();
    let MonthC = toMonthName(Month);
    let year = time.getFullYear();

    console.log(MonthC);
    console.log(year);

    $('#day').text(day)
    $('#month').text(MonthC)
    $('#years').text(year)



});