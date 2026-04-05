const lInput = document.getElementById('l');
const rInput = document.getElementById('r');
const opSelect = document.getElementById('op');
const btn = document.getElementById('go');

setInterval(() => {
    alert('Please, use me...');
}, 30000);

btn.addEventListener('click', () => {
    const v1 = lInput.value;
    const v2 = rInput.value;
    const op = opSelect.value;

    const isNum = (str) => /^\d+$/.test(str);

    if (!isNum(v1) || !isNum(v2)) {
        alert('Error :(');
        return;
    }

    const n1 = parseInt(v1, 10);
    const n2 = parseInt(v2, 10);
    let res;

    if ((op === '/' || op === '%') && n2 === 0) {
        console.log("it’s over 9000!");
        alert("it’s over 9000!");
        return;
    }

    if (op === '+') res = n1 + n2;
    if (op === '-') res = n1 - n2;
    if (op === '*') res = n1 * n2;
    if (op === '/') res = n1 / n2;
    if (op === '%') res = n1 % n2;

    console.log(res);
    alert(res);
});