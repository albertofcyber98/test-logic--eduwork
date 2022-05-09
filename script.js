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

const nomor3 = () => {
    let dataInputan = "9.86-A5.321";
    let dataAngkaNormal = dataInputan.match(/[0-9]/g)
    let output1 = dataAngkaNormal.join("")
    let dataNol = ""
    console.log(output1);
    for (let angkaAwal = 0; angkaAwal < dataAngkaNormal.length; angkaAwal++){
        let parameter = dataAngkaNormal.length - (angkaAwal+1);
        for (parameter; parameter > 0; parameter--){
            dataNol += "0"
        }
        console.log(`${dataAngkaNormal[angkaAwal]}` + dataNol)
        dataNol = ""
    }
}

const nomor4 = () => {
    let a = 3
    let b = 7
    a = a + b
    b = a - b
    a = a - b
    console.log(`a = ${a}, b = ${b}`)
}

const nomor5 = () => {
    let inputan = 104
    if (inputan > 100 || inputan < 1) {
        console.log("Silahkan masukkan bilangan 1-100")
    }
}

const nomor6 = () => {
    let dataArray = [1, 4, 7, 9, 12];

}

const nomor9 = () => {
    let dataArray = [4, 2, 6, 88, 3, 11]
    let low = dataArray[0]
    let high = dataArray[0]
    for (let minArray = 1; minArray < dataArray.length; minArray++){
        if (dataArray[minArray] < low) {
            low = dataArray[minArray]
        }
        if (dataArray[minArray] > high) {
            high = dataArray[minArray]
        }
    }
    console.log(`Low : ${low}, High : ${high}`)
}

const nomor10 = () => {
    let inputanTahun = 2024
    if (inputanTahun % 4 === 0) {
        console.log(`${inputanTahun} adalah tahun kabisat`)
    } else if(inputanTahun%4 !== 0){
        console.log(`${inputanTahun} bukan tahun kabisat`)
    }
}
nomor3()