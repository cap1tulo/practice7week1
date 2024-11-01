// Task: Sum of Two Numbers
function getSum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("sumResult").textContent = `Sum: ${num1 + num2}`;
}

// Task: Check if Square
function isSquare() {
    const num = parseInt(document.getElementById("squareInput").value);
    const result = Number.isInteger(Math.sqrt(num));
    document.getElementById("squareResult").textContent = `Is Square: ${result}`;
}

// Task: Greeting
function greeting() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    document.getElementById("greetingResult").textContent = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
}

// Task: Minimum of Three Numbers
function getMin() {
    const nums = [parseFloat(document.getElementById("min1").value), parseFloat(document.getElementById("min2").value), parseFloat(document.getElementById("min3").value)];
    document.getElementById("minResult").textContent = `Minimum: ${Math.min(...nums)}`;
}

// Task: Even/Odd Checker
function evenOrOdd() {
    const nums = [parseInt(document.getElementById("evenOdd1").value), parseInt(document.getElementById("evenOdd2").value), parseInt(document.getElementById("evenOdd3").value)];
    const allEven = nums.every(num => num % 2 === 0);
    const allOdd = nums.every(num => num % 2 !== 0);
    document.getElementById("evenOddResult").textContent = allEven ? "even" : allOdd ? "odd" : "even/odd";
}

// Task: Range Checker
function inOrOutRange() {
    const x = parseInt(document.getElementById("rangeX").value);
    const y = parseInt(document.getElementById("rangeY").value);
    const num = parseInt(document.getElementById("rangeNum").value);
    document.getElementById("rangeResult").textContent = (num > x && num < y) ? "In range" : "Out of range";
}

// Task: Create String of Numbers
function createString() {
    const min = parseInt(document.getElementById("minValue").value);
    const max = parseInt(document.getElementById("maxValue").value);
    const step = parseInt(document.getElementById("stepValue").value);
    let result = "";
    for (let i = min; i <= max; i += step) {
        result += i + " ";
    }
    document.getElementById("stringResult").textContent = result.trim();
}

// Task: Range Sum 1
function rangeSum1() {
    const start = parseInt(document.getElementById("rangeStart").value);
    const nthTerm = parseInt(document.getElementById("nthTerm").value);
    let result = 0;
    for (let i = nthTerm; i > 0; i--) {
        for (let j = start; j < start + i; j++) {
            result += j;
        }
    }
    document.getElementById("rangeSum1Result").textContent = `Range Sum 1: ${result}`;
}

// Task: Range Sum 2
function rangeSum2() {
    const start = parseInt(document.getElementById("sumStart").value);
    const end = parseInt(document.getElementById("sumEnd").value);
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    document.getElementById("rangeSum2Result").textContent = `Range Sum 2: ${result}`;
}

// Task: Series Sum
function seriesSum() {
    const n = parseInt(document.getElementById("seriesN").value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / (i * i);
    }
    document.getElementById("seriesResult").textContent = `Series Sum: ${sum.toFixed(2)}`;
}

// Task: Count Digits
function countDigits() {
    const num = document.getElementById("digitInput").value;
    document.getElementById("digitResult").textContent = `Number of digits: ${num.length}`;
}
