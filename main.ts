input.onButtonPressed(Button.A, function () {
    if (start_menu == 1) {
        if (menu == 0) {
            menu = 18
            basic.showNumber(menu)
        } else {
            menu += -1
            basic.showNumber(menu)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (count == 1) {
        if (answer == menu) {
            basic.showIcon(IconNames.Yes)
            count += 1
        } else {
            basic.showIcon(IconNames.No)
            basic.showNumber(menu)
        }
    } else if (count == 2) {
        start_menu = 0
        menu = 0
        count = 1
        first = randint(0, 9)
        second = randint(0, 9)
        basic.showString("" + first + "+" + second + "=?")
        basic.showString("" + first + "+" + second + "=?")
        answer = first + second
        start_menu = 1
        basic.showNumber(menu)
    }
})
input.onButtonPressed(Button.B, function () {
    if (start_menu == 1) {
        if (menu == 18) {
            menu = 0
            basic.showNumber(menu)
        } else {
            menu += 1
            basic.showNumber(menu)
        }
    }
})
let answer = 0
let second = 0
let first = 0
let count = 0
let menu = 0
let start_menu = 0
start_menu = 0
menu = 0
count = 1
first = randint(0, 9)
second = randint(0, 9)
basic.showString("" + first + "+" + second + "=?")
basic.showString("" + first + "+" + second + "=?")
answer = first + second
start_menu = 1
basic.showNumber(menu)
