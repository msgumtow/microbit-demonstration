/**
 * Microbit Demonstration
 * 
 * Ms. Gumtow
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("HI")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    led.toggle(1, 0)
    basic.pause(100)
    led.toggle(2, 1)
    basic.pause(100)
    led.toggle(1, 2)
    basic.pause(100)
    led.toggle(2, 3)
    basic.pause(100)
    led.toggle(1, 4)
    basic.pause(100)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
