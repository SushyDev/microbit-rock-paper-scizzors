let botScore = 0
let playerScore = 0
let rand = 0
let item: string[] = []
let botItem = ""
let playerItem = ""
item = ["rock", "paper", "sizzors"]

// Rock
input.onPinPressed(TouchPin.P0, function () {
    playerItem = item[0]
    botSelect()
})

// Paper
input.onPinReleased(TouchPin.P1, function () {
    playerItem = item[1]
    botSelect()
})

// Scizzors
input.onPinReleased(TouchPin.P2, function () {
    playerItem = item[2]
    botSelect()
})

function botSelect () {
    rand = Math.floor(Math.random() * 3)
    botItem = item[rand]
    calcScore()
}

function calcScore () {
    if (playerItem == botItem) {
        tie()
    } else if (playerItem == item[0]) {
        if (botItem == item[1]) {
            botWin()
        } else {
            playerWin()
        }
    } else if (playerItem == item[1]) {
        if (botItem == item[2]) {
            botWin()
        } else {
            playerWin()
        }
    } else if (playerItem == item[2]) {
        if (botItem == item[0]) {
            botWin()
        } else {
            playerWin()
        }
    }
}

function playerWin () {
    console.log("PLAYER WINS - BOT:" + botItem + " PLAYER:" + playerItem)
    playerScore += 1
    basic.showString("P" + playerScore)
    calcWin()
}

function botWin () {
    console.log("BOT WINS - BOT:" + botItem + " PLAYER:" + playerItem)
    botScore += 1
    basic.showString("B" + botScore)
    calcWin()
}

function tie () {
    console.log("ITS A TIE - BOT:" + botItem + " PLAYER:" + playerItem)
}

function calcWin() {
    if (playerScore == 3) {
        basic.showString("THE PLAYER WINS!")
        botScore = 0
        playerScore = 0
    } else if (botScore == 3) {
        basic.showString("THE BOT WINS!")
        botScore = 0
        playerScore = 0
    }
}