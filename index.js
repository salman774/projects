let homescore = 0
let guestScore = 0
let scoreofhome = document.getElementById("home-score")
let scoreofguest = document.getElementById("guest-score")

function addhomeone() {
    homescore += 1
    scoreofhome.textContent = homescore
}

function addhometwo() {
    homescore += 2
    scoreofhome.textContent = homescore
}

function addhomethree() {
    homescore += 3
    scoreofhome.textContent = homescore
}



function addone() {
    guestScore += 1
    scoreofguest.textContent = guestScore
}

function addtwo() {
    guestScore += 2
    scoreofguest.textContent = guestScore
}

function addthree() {
    guestScore += 3
    scoreofguest.textContent = guestScore
}