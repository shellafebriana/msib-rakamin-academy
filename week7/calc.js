exports.luas = function (bentuk,sisi1,sisi2=0) {
    switch (bentuk) {
        case 'persegi':
            sisi2 = sisi1
            return 'Luas Persegi = ' + sisi1 * sisi2
            break;
        case 'persegi panjang':
            return 'Luas Persegi Panjang = ' + sisi1 * sisi2
            break;
        default:
            return 'Inputan bentuk hanya berlaku pada persegi dan persegi panjang.'
            break;
    }
}

exports.keliling = function (bentuk,sisi1,sisi2=0) {
    switch (bentuk) {
        case 'persegi':
            sisi2 = sisi1
            return 'Keliling Persegi = ' + 4 * sisi1
            break;
        case 'persegi panjang':
            return 'Keliling Persegi Panjang = ' + 2 * (sisi1 + sisi2)
            break;
        default:
            return 'Inputan bentuk hanya berlaku pada persegi dan persegi panjang.'
            break;
    }
}