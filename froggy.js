function myFunction() {

    document.getElementById('sike').innerHTML = 'sike no frog pics to be found Sadge'
}


function frogAppear() {

    document.getElementById('froggers').src = "froggiepoggie.png"

}



function camofrogAppear() {

    document.getElementById('camofrog').src = 'Camofrog_NH.png'

}

function updateTime() {

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    var timeString = hours + ":" + minutes + " ";
    if ("hours > 11") {

        timeString += "AM"
    } else {
        timeString += "PM";
    }
    document.getElementById("clock").innerHTML = timeString;
}
setInterval(updateTime, 1000);

function getAge() {

    var x

    x = getElementById('age').value;

    x *= 365

}

function agePrint() {
    getElementById('ageprint').innerHTML = "your toad is" + x + "days old :D"
}


function testResults(form) {

    var TestVar = form.inputbox.value;
    TestVar *= 365
    TestVar = String(TestVar)
    window.alert(TestVar)
    document.getElementById("theageofFrog").innerHTML = TestVar;

}
