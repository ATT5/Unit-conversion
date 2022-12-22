
let meterFeet = document.getElementById("m/f")
let literGallon = document.getElementById("l/g")
const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const kilogramPounds = document.getElementById("k/p")

btnEl.addEventListener("click", function(){
    let unit = inputEl.value
    f = unit * 3.281
    m = unit / 3.281
    meterFeet.textContent = `${unit} meter = ${f.toFixed(3)} feet |
                             ${unit} feet = ${m.toFixed(3)} meters`
    g =  unit * 0.264
    l =  unit / 0.264
    literGallon.textContent = `${unit} liters = ${g.toFixed(3)} gallon |
                               ${unit} galon = ${l.toFixed(3)} liters`
    p = unit * 2.204
    k = unit / 2.204
    kilogramPounds.textContent = `${unit} kilograms = ${p.toFixed(3)} pounds | 
                                  ${unit} pounds = ${k.toFixed(3)} kilograms `
})

inputEl.addEventListener("click", function(){
    inputEl.value = ""
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/