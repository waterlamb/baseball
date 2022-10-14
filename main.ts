input.onButtonPressed(Button.A, function () {
    LIGHT = pins.analogReadPin(AnalogPin.P1)
})
let LIGHT = 0
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > LIGHT / 2) {
        max7219_matrix.clearAll()
        basic.clearScreen()
    } else {
        max7219_matrix.fillAll()
        basic.showIcon(IconNames.Heart)
    }
})
