let one = +prompt("Mời bạn nhập vào số a: ");
let two = +prompt("Mời bạn nhập vào số b: ");
let calculate = prompt("Mời bạn nhập vào các phép tính(+,-,*,/)");

let add = one + two;
let sub = one - two;
let multy = one * two;
let devide = one / two;


switch (calculate) {
    case "+": 
    alert("Kết quả của phép tính trên là" + add)
        break;
    case "-": 
    alert("Kết quả của phép tính trên là" + sub)
        break;
    case "*": 
    alert("Kết quả của phép tính trên là "+ multy)
        break;
    case "/": 
    alert("Kết quả của phép tính trên là "+ devide )
        break;
    default:
    alert("Không có kết quả");
        break;
}

