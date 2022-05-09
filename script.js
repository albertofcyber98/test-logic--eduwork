const nomor1 = () => {
    let inputan = 4
    let tampungAngka = 1
    for (let angkaAwal = 1; angkaAwal <= inputan; angkaAwal++){
        tampungAngka *= angkaAwal
    }
    console.log(tampungAngka);
}

const nomor2 = () => {
    let input = "abcde"
    let arrayTampung = input.split("")
    let angkaAwal = 0;
    let output = "";
    let maxArray = arrayTampung.length-1
    for (maxArray; maxArray >= angkaAwal; maxArray--){
        output += arrayTampung[maxArray]
    }
    console.log(output)
}

const nomor4 = () => {
    let a = 3
    let b = 7
    a = a + b
    b = a - b
    a = a - b
    console.log(`a = ${a}, b = ${b}`)
}
nomor4()