input.onButtonPressed(Button.A, function () {
    if (project == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (project == 2) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    if (project == 1) {
        basic.showIcon(IconNames.No)
    }
    if (project == 2) {
        basic.showIcon(IconNames.Sad)
    }
})
let project = 0
project = 0
let tijd = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && project == 0 && tijd == 0) {
        tijd = 1
        basic.showNumber(1)
        basic.pause(100)
        basic.clearScreen()
        project = 1
    }
    if (input.buttonIsPressed(Button.B) && project == 0 && tijd == 0) {
        tijd = 1
        basic.showNumber(2)
        basic.pause(100)
        basic.clearScreen()
        project = 2
    }
})
