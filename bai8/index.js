let start = document.getElementById("start");
start.addEventListener("click", gameStart);

function gameStart() {
    let count = 0;
    let number = parseInt(prompt("nhap khoang so ban doan"));
    let ran = Math.floor(Math.random() * number);
    do {
        let value = parseInt(prompt("nhap so ban doan"));
        if (ran == value) {
            start.style.display = "none";
            document.getElementById("result").innerHTML = "ban doan dung";
            break;
        } else {
            alert("ban doan sai");
            count++;
        }
    } while (count < 3);
}