function BMI() {
    num1 = document.getElementById("tinggi").value;
    num2 = document.getElementById("berat").value;
    konversiTinggi = num1 / 100;
    let result=num2 / (konversiTinggi * konversiTinggi)
    document.getElementById("result").innerHTML = result;
    return (result)
}
function hasil() {
    let hasilBMI = BMI()
    console.log(BMI)
    let output=''
    if (hasilBMI >= 40) {
        output = 'Obesitas III'
    }
    else if (hasilBMI >= 35 && hasilBMI <= 39.9) {
        output = 'Obesitas II'
    }
    else if (hasilBMI >= 30 && hasilBMI <= 34.9) {
        output = 'Obesitas I'
    }
    else if (hasilBMI >= 25 && hasilBMI <= 29.9) {
        output = 'Pre-Obesitas'
    }
    else if (hasilBMI >= 18.5 && hasilBMI <= 24.9) {
        output = 'Normal'
    }
    else if (hasilBMI >= 17 && hasilBMI <= 18.4) {
        output = 'Sedikit Kurus'
    }
    else if (hasilBMI >= 16 && hasilBMI <= 16.9) {
        output = 'Kurus'
    }
    else if (hasilBMI < 16) {
        output = 'Sangat Kurus'
    }
    else {
        output = 'Invalid Input'
    }

    document.getElementById("resulttest").innerHTML = output
    return (output)
}
// console.log(cekBMI(50, 110))//41.3 ob III
// console.log(cekBMI(50, 115))//37.8 ob II
// console.log(cekBMI(50, 120))//34.7 ob I
// console.log(cekBMI(50, 140))//25.5 Pre ob
// console.log(cekBMI(50, 150))//22.22 normal
// console.log(cekBMI(50, 170))//17.3 sedikit kurus
// console.log(cekBMI(50, 175))//16.3 kurus
// console.log(cekBMI(50, 180))//15.4 sangat kurus
// console.log(cekBMI(50))//Invalid input

