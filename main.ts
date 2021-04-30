let llum = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
llum = llum
led.setBrightness(llum)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        llum += 10
        led.setBrightness(llum)
        basic.pause(100)
        serial.writeLine("" + (llum))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        llum += -10
        led.setBrightness(llum)
        basic.pause(100)
        serial.writeLine("" + (llum))
    }
})
