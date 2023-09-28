// call module calc
const calc = require('./calc.js')

// view function luas
console.log(calc.luas('persegi panjang',9,12)) // case persegi panjang
console.log(calc.luas('persegi',9)) // case persegi
console.log(calc.luas('segitiga',9,12)) // case except persegi panjang and persegi

// view function keliling
console.log(calc.keliling('persegi panjang',8,24)) // case persegi panjang
console.log(calc.keliling('persegi',10)) // case persegi
console.log(calc.keliling('trapesium',9,12)) // case except persegi panjang and persegi