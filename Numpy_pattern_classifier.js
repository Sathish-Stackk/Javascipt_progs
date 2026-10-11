function classifyNumber(num) {
    if (num === 0) {
        console.log("Zero");
    } else if (num % 2 === 0 && num % 3 === 0) {
        console.log("Even and divisible by 3");
    } else if (num % 2 === 0) {
        console.log("Even Number");
    } else if (num % 3 === 0) {
        console.log("Odd and divisible by 3");
    } else {
        console.log("Odd Number");
    }
}

classifyNumber(27);
