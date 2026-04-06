var leftInput = document.getElementById('left');
var rightInput = document.getElementById('right');
var operatorSelect = document.getElementById('op');
var button = document.getElementById('btn');

function reminder() {
    alert('Please, use me...');
}

setInterval(reminder, 30000);

function checkIsPositiveInteger(str) {
    if (str === "") {
        return false;
    }
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}

button.onclick = function() {
    var val1 = leftInput.value;
    var val2 = rightInput.value;
    var op = operatorSelect.value;

    if (checkIsPositiveInteger(val1) === false || checkIsPositiveInteger(val2) === false) {
        alert('Error :(');
        return;
    }

    var n1 = parseInt(val1);
    var n2 = parseInt(val2);
    var result;

    if ((op === '/' || op === '%') && n2 === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    if (op === '+') {
        result = n1 + n2;
    } else if (op === '-') {
        result = n1 - n2;
    } else if (op === '*') {
        result = n1 * n2;
    } else if (op === '/') {
        result = n1 / n2;
    } else if (op === '%') {
        result = n1 % n2;
    }

    alert(result);
    console.log(result);
};