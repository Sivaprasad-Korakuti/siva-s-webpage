function calculate() {
    const input = document.getElementById('input-area');
    if (input.value) {
        const res = eval(input.value);
        console.log(res);
        input.value = res;
    }
    else {
        input.value = "! please enter...";
    }
}
function appendvalue(num) {
    const input = document.getElementById('input-area');
    input.value += num;
}
function popvalue() {
    const input = document.getElementById('input-area');
    input.value = "";
}
document.addEventListener('keydown', function (e) {
    const value = e.key;
    if (value === "Enter") {
        calculate();
    }
})
