//1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) YYY-MM-DD HH:mm eg. 20120-01-02 07:05
var yourDate = new Date();
var curr_date = yourDate.getDate();
var curr_month = yourDate.getMonth()+1;
var curr_year = yourDate.getFullYear();
var curr_hours = yourDate.getHours();
var curr_minutes = yourDate.getMinutes();
if (curr_date<10){
    curr_date = "0"+ curr_date
}
if (curr_month<10){
    curr_month = "0"+ curr_month
}
if (curr_hours<10){
    curr_hours = "0"+ curr_hours
}
if (curr_minutes<10){
    curr_minutes = "0"+ curr_minutes
}
console.log("YYYY-MM-DD HH:mm format: " + yourDate.toISOString().replace('T', ' ').substring(0,16) );
console.log("DD-MM-YYYY HH:mm format: " + curr_year +  "-" + curr_month + "-" + curr_date + " " +curr_hours + ":" + curr_minutes );