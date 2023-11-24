let month = +prompt("Mời nhập tháng vào (1/2.../12)");

switch (month) {
    case 1: 
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log("Tháng" ,month ,"có 31 ngày");
    break;
    case 2:
        console.log("Tháng 2 có 28 ngày");
    break;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log("Tháng" ,month, " có 30 ngày");
    break;
    default:
        console.log("Vui lòng nhập lại");
    break;
}
