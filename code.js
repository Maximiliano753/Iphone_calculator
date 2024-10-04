let input = document.querySelector('.input'); //привязан к onclick=’insert’
//Вставить символ
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//Очистить все поле
function clean() {
    input.textContent = "0";
}
//Удалить символ
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
//Посчитать выражение
function equal() {
    input.textContent = eval(input.textContent);
}
