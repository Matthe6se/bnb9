enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    game.resume()
})
let list: number[] = []
let fps: datalogger.ColumnValue = null
for (let index = 0; index < 4; index++) {
    let bnb1 = 0
    fps = datalogger.createCV("ops", pins.map(
    0,
    0,
    1023,
    0,
    4
    ))
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showString("Hello!")
    serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate115200
    )
    led.plotBarGraph(
    0,
    0
    )
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    pins.digitalWritePin(DigitalPin.P0, 0)
    game.startCountdown(10000)
    radio.sendMessage(RadioMessage.message1)
    list = [0, 1, 0]
    serial.writeNumbers([
    Math.map(0, 0, 1023, 0, 4),
    1,
    0
    ])
    datalogger.log(
    datalogger.createCV("", images.createBigImage(`
        # . . . . . . . . #
        . . . . # . . # . .
        . # # . . # . . . .
        . . . . . . # . . .
        . . # . . # . . . #
        `)),
    datalogger.createCV("", game.createSprite(2, bnb1))
    )
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    led.plotBarGraph(
    0,
    0,
    true
    )
    led.unplot(0, 0)
}
basic.forever(function () {
	
})
basic.forever(function () {
	
})
