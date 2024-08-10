


// start the countdown
function start() {
    const birthdayInput = document.getElementById("birthday");
    const birthdayValue = birthdayInput.value;
    var countDownDate = new Date(birthdayValue).getTime();
    var x = setInterval(function() {
    // Get today's date and time
        var now = new Date().getTime();
    // Find the distance between now and the count down date
        var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "<sub>days</sub>" + hours + "<sub>hrs</sub>" +  minutes + "<sub>mins</sub>" +  seconds + "<sub>scnds</sub>";
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "IT IS EXPIRED!";
    }
    }, 1000);


    
        
}

