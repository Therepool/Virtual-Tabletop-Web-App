var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
};

var dice = {
    sides: 10,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

var button = document.getElementById('button1');

button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
};

var dice = {
    sides: 20,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

var button = document.getElementById('button2');

button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
};

var dice = {
    sides: 40,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

var button = document.getElementById('button3');

button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
}
