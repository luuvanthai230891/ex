let a = +prompt("Nhập vào số a")
let b = +prompt("Nhập vào số b")
let c = +prompt("Nhập vào số c")

if ( a > b && b > c){
    console.log("Max là", a);
    console.log("Min là", c);
} else if ( a > c && c > b) {
    console.log("Max là", a);
    console.log("Min là", b);
}
 else if ( c > b && b > a) {
    console.log("Max là", c);
    console.log("Min là", a);
}
 else if ( c > a && a > b) {
    console.log("Max là", c);
    console.log("Min là", b);
}
 else if ( b > c && c > a) {
    console.log("Max là", b);
    console.log("Min là", a);
}
 else if ( b > a && a > c) {
    console.log("Max là", b);
    console.log("Min là", c);
}