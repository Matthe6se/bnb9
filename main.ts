enum RadioMessage {
    message1 = 49434
}
function CODE5679 () {
    serial.writeNumbers([0, 1])
    serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate115200
    )
    control.waitForEvent(0, 0)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    radio.sendNumber(0)
    radio.sendValue("name", 0)
}
radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    0,
    0
    )
    control.waitForEvent(EventBusSource.MICROBIT_ID_BUTTON_A, control.eventTimestamp())
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    pins.digitalWritePin(DigitalPin.P0, 0)
    serial.writeNumbers([0, 1])
    pins.setAudioPinEnabled(false)
    serial.writeBuffer(serial.readBuffer(pins.map(
    0,
    0,
    1023,
    0,
    4
    )))
    serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate115200
    )
    serial.writeNumbers([0, 1])
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.i2cWriteNumber(
    0,
    0,
    NumberFormat.Int8LE,
    false
    )
    pins.setMatrixWidth(DigitalPin.P0, 5)
    pins.analogSetPitchPin(AnalogPin.P0)
    pins.setAudioPinEnabled(false)
    pins.analogWritePin(AnalogPin.P0, 1023)
})
let list: number[] = []
let fps: datalogger.ColumnValue = null
serial.writeBuffer(serial.readBuffer(pins.map(
0,
0,
1023,
0,
4
)))
let text_list = 0
serial.writeNumbers([0, 1])
pins.analogWritePin(AnalogPin.P0, 1023)
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
    radio.setGroup(sonar.ping(
    DigitalPin.P10,
    DigitalPin.P10,
    PingUnit.Centimeters
    ))
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
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
    datalogger.createCV("ops", images.createBigImage(`
        # . . . . . . . . #
        . . . . # . . # . .
        . # # . . # . . . .
        . . . . . . # . . .
        . . # . . # . . . #
        `)),
    datalogger.createCV("90", game.createSprite(2, bnb1))
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
