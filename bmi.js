let weight = +prompt("Nhập vào cân nặng (kg) : ") ;
let height = +prompt("Nhập vào chiều cao (m): ");
let BMI = weight / (Math.pow(height, 2));

if (BMI < 18.5) {
    console.log("Gầy");
} else if (BMI >= 18.5 && BMI < 25) {
    console.log("Bình thường");
} else if (BMI >= 25 ) {
    console.log("Thừa cân");
} else if (BMI < 30) {
    console.log("Tiền béo phì");
} else if (BMI >= 30 && BMI < 35) {
    console.log("Béo phì độ 1");
} else if (BMI >= 35 && BMI < 40) {
    console.log("Béo phì độ 2");
} else {
    console.log("Béo phì độ 3 ");
}