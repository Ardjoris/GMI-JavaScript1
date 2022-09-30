//
let container = document.querySelector(`#container`)
console.log(container)
let multiplicandInput = document.querySelector(`#multiplicand`)
console.log(multiplicandInput)
let button = document.querySelector(`#buttonID`).addEventListener(`click`, multiplicandFunction);
console.log(`knop`, button)

function multiplicandFunction() {

    console.log(`maakTafel`, multiplicandInput.value)
    multiplicand = multiplicandInput.value;
    console.log(multiplicandInput.value)
    multiplier = 1

    let p = document.createElement(`p`)
    p.innerText = `De tafel van ${multiplicand}`
    container.append(p)

    rows = 10
    answer = multiplier * multiplicand

    while (multiplier <= rows) {
        let p = document.createElement(`p`) // ik moet p(aragraph) steeds opnieuw aanmaken, waarom?
        p.innerText = `${multiplier} x ${multiplicand} = ${answer}`
        console.log(p)
        container.append(p)
        multiplier++
        //    answer = multiplier * multiplicand
    }
    container.remove()

}

//console.log(`container`, container)
//let p = document.createElement(`p`)
//p.innerText = `a             De tafel van ${multiplicant}` // waarom werken deze spaties niet? hoe krijg ik het in het midden?
//console.log(p)
//container.append(p)

//while (multiplier <= rows) {
//    let p = document.createElement(`p`) // ik moet p(aragraph) steeds opnieuw aanmaken, waarom?
//    p.innerText = `${multiplier} x ${multiplicant} = ${answer}`
//    console.log(p)
//    container.append(p)
//    multiplier++
//}







