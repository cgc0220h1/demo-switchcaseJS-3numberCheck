function numCheck() {
    let a = +prompt("Nhập các số bất kì từ 1 đến 3");
    switch (a) {
        case 0:
            alert("0");
            break;
        case 1:
            alert("1");
            break;
        case 2:
        case 3:
            alert("2,3")
            break;
    }
}