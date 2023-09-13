/* Function min and max  
arr for array variable that you wanna know min or max 
est for which one you wanna know min or max. 
P.s please use string to est :)
*/
function est(arr, est) {
    let min = arr[0]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }else{
            if (arr[i] < min) {
                min = arr[i]
            }
        }
    }
    switch (est) {
        case 'min':
            return min
        case 'max' : 
            return max
        default:
            return "Gunakan kata min atau max"
    }
    
}

/* Function total if we sum all data 
arr for array variable that you wanna know how much total if we sum all data in that variable
*/
function sum(arr){
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

/* Function average 
arr for array variable that you wanna know how much average in that variable
*/
function average(arr) {
    let total = sum(arr)
    let avr   = total/arr.length
    return avr 
}

/* Function comparison 
exp for variable that you wanna know result if array genap and array ganjil in comparison
P.s please fill it with min | max | sum | average
*/
function comparison(exp) {
    if (exp === 'min') {
        if(min_ganjil == min_genap) return 'Min memiliki nilai sama antara array genap dan ganjil'
        else if(min_ganjil > min_genap) return 'Min lebih besar array ganjil'
        else if(min_ganjil < min_genap) return 'Min lebih besar array genap'  
    }else if(exp === 'max'){
        if(max_ganjil == max_genap) return 'Max memiliki nilai sama antara array genap dan ganjil'
        else if(max_ganjil > max_genap) return 'Max lebih besar array ganjil'
        else if(max_ganjil < max_genap) return 'Max lebih besar array genap' 
    }else if(exp === 'sum'){
        if(total_ganjil == total_genap) return 'Total memiliki nilai sama antara array genap dan ganjil'
        else if(total_ganjil > total_genap) return 'Total lebih besar array ganjil'
        else if(total_ganjil < total_genap) return 'Total lebih besar array genap'
    }else if(exp === 'average'){
        if(rata_rata_ganjil == rata_rata_genap) return 'Rata-rata memiliki nilai sama antara array genap dan ganjil'
        else if(rata_rata_ganjil > rata_rata_genap) return 'Rata-rata lebih besar array ganjil'
        else if(rata_rata_ganjil < rata_rata_genap) return 'Rata-rata lebih besar array genap'
    }else{
        return 'Isi antara min | max | sum | average ! Terimakasih<3'
    }
}

// Declaration variabel
const angka     = []
const genap     = []
const ganjil    = []

// Random number between 1 and 100 then push to angka
for (let i = 0; i < 100; i++) {
    angka.push(Math.floor(Math.random() * (50 - 0 + 1)) + 0)
}

// condition split into genap and ganjil
for (let i = 0; i < angka.length; i++) {
    angka[i] % 2 == 0 ? genap.push(angka[i]) : ganjil.push(angka[i])
}

// Output
console.log('Homework Week 4 - Shella Febriana Mahardika')
console.log('===========================================')
console.log('Berikut isi variabel array angka : ')
for (let index = 0; index < angka.length; index++) {
    console.log(angka[index])
}
console.log('===========================================')
console.log('Berikut isi variabel array genap : ')
for (let index = 0; index < genap.length; index++) {
    console.log(genap[index])
}
console.log('===========================================')
console.log('Berikut isi variabel array ganjil : ')
for (let index = 0; index < ganjil.length; index++) {
    console.log(ganjil[index])
}


const min_genap         = est(genap, 'min')
const max_genap         = est(genap, 'max')
const total_genap       = sum(genap)
const rata_rata_genap   = average(genap)

const min_ganjil        = est(ganjil, 'min')
const max_ganjil        = est(ganjil, 'max')
const total_ganjil      = sum(ganjil)
const rata_rata_ganjil  = average(ganjil)

console.log('===========================================')
console.log('Berikut min, max, rata-rata, dan total dari array genap : ')
console.log('Min : '+ min_genap)
console.log('Max : '+ max_genap)
console.log('Rata-rata : '+ rata_rata_genap)
console.log('Total : '+total_genap)


console.log('===========================================')
console.log('Berikut min, max, rata-rata, dan total dari array ganjil : ')
console.log('Min : '+ min_ganjil)
console.log('Max : '+ max_ganjil)
console.log('Rata-rata : '+ rata_rata_ganjil)
console.log('Total : '+total_ganjil)


console.log('===========================================')
console.log('Berikut hasil perbandingan nilai min, max, total, dan rata-rata : ')
console.log('Perbandingan min ganjil dan genap : '+ comparison('min'))
console.log('Perbandingan max ganjil dan genap : '+ comparison('max'))
console.log('Perbandingan total ganjil dan genap : '+ comparison('sum'))
console.log('Perbandingan rata-rata ganjil dan genap : '+ comparison('average'))
