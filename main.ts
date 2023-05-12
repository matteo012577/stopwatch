let start = 0
let elsapset = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elsapset = input.runningTime() - start
    basic.showNumber(Math.idiv(elsapset, 1000))
})
