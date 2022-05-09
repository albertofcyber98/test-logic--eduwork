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
    let inputan = 39
    let tampungString = ""
    let tampungData = Array.from(String(inputan), Number)
    for (let angkaAwal = 0; angkaAwal < tampungData.length; angkaAwal++){
        if (tampungData[angkaAwal] == 9) {
            if (tampungData.length == 2 && tampungData.indexOf(9) == 0) {
                tampungString += "Sembilan Puluh "
            } else if(tampungData.length == 1){
                tampungString += "Sembilan"
            }else if(tampungData.length == 2 && tampungData.indexOf(9) == 1){
                tampungString += "Sembilan"
            }
        }else if (tampungData[angkaAwal] == 8) {
            if (tampungData.length == 2 && tampungData.indexOf(8) == 0) {
                tampungString += "Delapan Puluh "
            } else if(tampungData.length == 1){
                tampungString += "Delapan"
            }else if(tampungData.length == 2 && tampungData.indexOf(8) == 1){
                tampungString += "Delapan"
            }
        }else if (tampungData[angkaAwal] == 7) {
            if (tampungData.length == 2 && tampungData.indexOf(7) == 0) {
                tampungString += "Tujuh Puluh "
            } else if(tampungData.length == 1){
                tampungString += "Tujuh"
            }else if(tampungData.length == 2 && tampungData.indexOf(7) == 1){
                tampungString += "Tujuh"
            }
        }else if (tampungData[angkaAwal] == 6) {
            if (tampungData.length == 2 && tampungData.indexOf(6) == 0) {
                tampungString += "Enam Puluh "
            } else if(tampungData.length == 1){
                tampungString += "Enam"
            }else if(tampungData.length == 2 && tampungData.indexOf(6) == 1){
                tampungString += "Enam"
            }
        }else if (tampungData[angkaAwal] == 5) {
            if (tampungData.length == 2 && tampungData.indexOf(5) == 0) {
                tampungString += "Lima Puluh "
            } else if(tampungData.length == 1){
                tampungString += "Lima"
            }else if(tampungData.length == 2 && tampungData.indexOf(5) == 1){
                tampungString += "Lima"
            }
        }else if (tampungData[angkaAwal] == 4) {
            if (tampungData.length == 2 && tampungData.indexOf(4) == 0) {
                tampungString += "Empat Puluh "
            } else if(tampungData.length == 1){
                tampungString += "Empat"
            }else if(tampungData.length == 2 && tampungData.indexOf(4) == 1){
                tampungString += "Empat"
            }
        }else if (tampungData[angkaAwal] == 3) {
            if (tampungData.length == 2 && tampungData.indexOf(3) == 0) {
                tampungString += "Tiga Puluh "
            } else if(tampungData.length == 1){
                tampungString += "Tiga"
            }else if(tampungData.length == 2 && tampungData.indexOf(3) == 1){
                tampungString += "Tiga"
            }
        }else if (tampungData[angkaAwal] == 2) {
            if (tampungData.length == 2 && tampungData.indexOf(2) == 0) {
                tampungString += "Dua Puluh "
            } else if(tampungData.length == 1 ){
                tampungString += "Dua"
            }else if(tampungData.length == 2 && tampungData.indexOf(2) == 1){
                tampungString += "Dua"
            }
        }else if (tampungData[angkaAwal] == 1) {
            if (tampungData.length == 2 && tampungData[1] == 0) {
                tampungString += "Sepuluh"
            } else if(tampungData.length == 2 && tampungData.indexOf(1) == 1){
                tampungString += "Satu"
            }
        }
    }
    if(tampungData.length == 2 && tampungData[1] == 1){
        tampungString += "Sebelas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 2){
        tampungString += " Belas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 3){
        tampungString += " Belas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 4){
        tampungString += " Belas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 5){
        tampungString += " Belas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 6){
        tampungString += " Belas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 7){
        tampungString += " Belas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 8){
        tampungString += " Belas"
    }else if(tampungData.length == 2 && tampungData.indexOf(1) == 0 && tampungData[1] == 9){
        tampungString += " Belas"
    }
    if (inputan > 100 || inputan < 1) {
        tampungString = "Silahkan masukkan bilangan 1-100"
    }
    console.log(tampungString)
}

const nomor6 = () => {
    let dataArray = [1, 4, 7, 9, 12];
    let low = 2
    let high = 15
    dataArray.shift()
    console.log(dataArray)
}

const nomor7 = () => {
    let dataArray = [1, 4, 7, 9, 12];
    let low = 2
    let high = 15
    dataArray.shift()
    console.log(dataArray.length)
}

const nomor8 = () => {
    let dataAngka = 15
    for (let angkaAwal = 1; angkaAwal <= 15; angkaAwal++){
        if (angkaAwal == 3) {
            console.log('Edu')
        } else if (angkaAwal == 9) {
            console.log('Work')
        } else if (angkaAwal == 15) {
            console.log('EduWork')
        } else {
            console.log(angkaAwal)
        }
    }
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

nomor1()
nomor2()
nomor3()
nomor4()
nomor5()
nomor6()
nomor7()
nomor8()
nomor9()
nomor10()
// selesai