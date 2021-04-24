







function updateTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#text").text("Welcome to the project tracker!" + " " + time)
}

updateTime()
setInterval(function() {
    updateTime()
}, 1000)

$( function() {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
    });
});
  