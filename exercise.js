// Task 1: Reverse String
function stringReverse1(str) {
    if (typeof(str) !== 'string') return;
    return str.split('').reverse().join('');
}

function stringReverse2(str) {
    if (typeof(str) !== 'string') return;
    const arr = new Array(str.length);
    str.split('').forEach((char, i) => {
        arr[str.length - 1 - i] = char;
        i++;
    });
    return arr.join('');
}

// Task 2: FizzBuzz
function printFizzBuzz() {
    for (i = 1; i < 101; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}

// Task 3: Even or Odd
function determineEvenOrOdd(int) {
    if (typeof(int) !== 'number' || Number.isInteger(int) === false) return;
    return int % 2 === 0 ? "Even" : "Odd";
}
