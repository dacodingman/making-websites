function myFunction() {
    document.getElementById('sike').innerHTML = 'sike no frog pics to be found Sadge'
}
function frogAppear() {
    document.getElementById('froggers').src = "https://raw.githubusercontent.com/dacodingman/making-websites/main/public/froggiePoggie.png"
}
function camofrogAppear() {
    document.getElementById('camofrog').src = 'https://raw.githubusercontent.com/dacodingman/making-websites/main/Camofrog_NH.png'

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
    document.getElementById("theageofFrog").innerHTML = "your frog is" + TestVar + "years old!";
}

function hoverTest() {

    document.getElementById('hoverTest').innerHTML = "if you found this ily :D"

}

function fuckGoBack() {

    document.getElementById("hoverTest").innerHTML = "if you found this ily :D"

}

function puzzleA(form) {

    var puzzleInput = form.puzzleBox.value;
    if (puzzleInput == 7) {
        window.alert("correct! here's another frog for you!")
        document.getElementById('correctFrog').src = 'https://raw.githubusercontent.com/dacodingman/making-websites/main/public/cowboyFrog.png'
    } else if (puzzleInput == 8) {
        window.alert("correct! here's another frog for you!")
        document.getElementById('correctFrog').src = 'https://raw.githubusercontent.com/dacodingman/making-websites/main/public/cowboyFrog.png'
    } else if (puzzleInput == 9) {
        window.alert("correct! here's another frog for you!")
        document.getElementById('correctFrog').src = 'https://raw.githubusercontent.com/dacodingman/making-websites/main/public/cowboyFrog.png'
    } else {
        window.alert('incorrect! try again!')
    }
}

