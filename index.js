function cekBMI(berat,tinggi) {
    // let berat=document.getElementById('berat').value
    // let tinggi=document.getElementById('tinggi').value
    let meter = tinggi / 100
    let BMI = berat / (meter * meter)
    // document.getElementById('bmi').innerHTML=BMI 
    let output = ''

    if (BMI >= 40) {
        output = 'Obesitas III'
    }
    else if (BMI >= 35 && BMI <= 39.9) {
        output = 'Obesitas II'
    }
    else if (BMI >= 30 && BMI <= 34.9) {
        output = 'Obesitas I'
    }
    else if (BMI >=25 && BMI <=29.9) {
        output = 'Pre-Obesitas'
    }
    else if (BMI >=18.5 && BMI <=24.9) {
        output = 'Normal'
    }
    else if (BMI >=17 && BMI <=18.4) {
        output = 'Sedikit Kurus'
    }
    else if (BMI >=16 && BMI <=16.9) {
        output = 'Kurus'
    }
    else if (BMI <16) {
        output = 'Sangat Kurus'
    }
    else {
        output = 'Invalid input'
    }
   
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

