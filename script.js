var projectName = document.getElementById("projectName").value
var projectType = document.getElementById("projectType").value
var myTable = document.getElementById('myTable')
var hourlyPay = $("#hourlyPay")
console.log("s", projectName)
console.log("t", projectType)
var time = moment().format('MMMM Do YYYY, h:mm:ss a')



$("#save").click(function(){


    
    //displays user info
    console.log("g", $("#projectName").val())
    console.log("k", $("#projectType option:selected").text())
    myTable.rows[1].cells[0].innerHTML = $("#projectName").val()
    myTable.rows[1].cells[1].innerHTML = $("#projectType option:selected").text()
    myTable.rows[1].cells[2].innerHTML = $("#hourlyPay option:selected").text()
    myTable.rows[1].cells[3].innerHTML = $("#datepicker").val()
    //myTable.rows[1].cells[4].innerHTML = time.to($("#datepicker").val())


})






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
  