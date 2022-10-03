const plusOneHomeBtn = document.getElementById("home-plus-one")
const plusTwoHomeBtn = document.getElementById("home-plus-two")
const plusThreeHomeBtn = document.getElementById("home-plus-three")
const plusOneGuestBtn = document.getElementById("guest-plus-one")
const plusTwoGuestBtn = document.getElementById("guest-plus-two")
const plusThreeGuestBtn = document.getElementById("guest-plus-three")
const homeCounter = document.getElementById("home-counter")
const guestCounter = document.getElementById("guest-counter")
const periodBtn = document.getElementById("period-btn")
const periodCounter = document.getElementById("period-counter")
const foulBtn = document.getElementById("foul-btn")
const foulCounter = document.getElementById("foul-counter")
const newGameBtn = document.getElementById("newgame-btn")

plusOneHomeBtn.addEventListener("click",addOneHome)
plusTwoHomeBtn.addEventListener("click",addTwoHome)
plusThreeHomeBtn.addEventListener("click",addThreeHome)
plusOneGuestBtn.addEventListener("click",addOneGuest)
plusTwoGuestBtn.addEventListener("click",addTwoGuest)
plusThreeGuestBtn.addEventListener("click",addThreeGuest)
foulBtn.addEventListener("click",incrementFoul)
periodBtn.addEventListener("click",incrementPeriod)
newGameBtn.addEventListener("click",resetAll)

let periodCount = 1
let foulCount = 0
let homeCount = 0
let guestCount = 0

resetAll()

function resetAll(){
    periodCount = 1
    foulCount = 0
    homeCount = 0
    guestCount = 0
    displayHomeCounter()
    displayGuestCounter()
    displayFoulCounter()
    displayPeriodCounter()
}

function addOneHome(){
    homeCount += 1
    displayHomeCounter()
}

function addTwoHome(){
    homeCount += 2
    displayHomeCounter()
}

function addThreeHome(){
    homeCount += 3
    displayHomeCounter()
}

function addOneGuest(){
    guestCount += 1
    displayGuestCounter()
}

function addTwoGuest(){
    guestCount += 2
    displayGuestCounter()
}

function addThreeGuest(){
    guestCount += 3
    displayGuestCounter()
}

function displayHomeCounter(){
    homeCounter.textContent = homeCount;
}

function displayGuestCounter(){
    guestCounter.textContent = guestCount;
}

function incrementPeriod(){
    periodCount += 1
    displayPeriodCounter()
}

function incrementFoul(){
    foulCount += 1
    displayFoulCounter()
}

function displayPeriodCounter(){
    periodCounter.textContent = periodCount
}

function displayFoulCounter(){
    foulCounter.textContent = foulCount
}

