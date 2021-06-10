let _12_broj = 0
let minus_i_plus = 0
let _2_broj = 0
let Koji_broj = 0
let _3_broj = 0
let _1_broj = 0
let Broj = 0
let veliko = 0
let mala = 0
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("Oduzimamo")
    _12_broj = _12_broj - 1
    basic.showNumber(_12_broj)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("Sabiramo")
    _12_broj = _12_broj + 1
    basic.showNumber(_12_broj)
})
input.onButtonPressed(Button.A, function () {
    minus_i_plus = 0
    IzbrojBroja(1)
    basic.showNumber(_2_broj)
})
function IzbrojBroja (BrojIzbor: number) {
    if (Koji_broj == 2) {
        if (minus_i_plus == 1) {
            _3_broj = _1_broj + 1
            _3_broj = _1_broj
        } else {
            _3_broj = _1_broj - 1
            _3_broj = _1_broj
        }
    }
    if (Koji_broj == 1) {
        if (minus_i_plus == 1) {
            _1_broj = _1_broj + 1
            Broj = _1_broj
        } else {
            _1_broj = _1_broj - 1
            Broj = _1_broj
        }
    } else {
        if (minus_i_plus == 1) {
            _2_broj = _2_broj + 1
            Broj = _2_broj
        } else {
            _2_broj = _2_broj - 1
            Broj = _2_broj
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("Kojim brojem sabiramo")
    Koji_broj = 1
    Broj = _2_broj
    basic.showNumber(Broj)
    _12_broj = _1_broj
})
input.onButtonPressed(Button.B, function () {
    minus_i_plus = 1
    IzbrojBroja(1)
    basic.showNumber(Broj)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("Kojim brojem oduzimamo")
    Koji_broj = 3
    Broj = _3_broj
    basic.showNumber(Broj)
    _12_broj = _1_broj
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Sa kojim brojem cemo raditi")
    Koji_broj = 0
    Broj = _1_broj
    basic.showNumber(Broj)
    _12_broj = _1_broj
})
basic.forever(function () {
    if (_2_broj < _1_broj) {
        veliko = _1_broj
    } else {
        veliko = _2_broj
    }
    if (_2_broj > _1_broj) {
        mala = _1_broj
    } else {
        mala = _2_broj
    }
})
