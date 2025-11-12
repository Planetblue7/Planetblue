let じゃんけん = 0
input.onButtonPressed(Button.A, function () {
    じゃんけん = randint(0, 2)
    if (じゃんけん == 0) {
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # . .
            # # # # #
            # # # # #
            `)
    }
    if (じゃんけん == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (じゃんけん == 2) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
    control.reset()
})
basic.forever(function () {
	
})
