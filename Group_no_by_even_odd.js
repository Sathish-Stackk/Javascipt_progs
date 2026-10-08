function separateNumbers(numbers) {
    const result = {
        even: [],
        odd: []
    };

    numbers.forEach(num => {
        if (num % 2 === 0) {
            result.even.push(num);
        } else {
            result.odd.push(num);
        }
    });

    return result;
}

const numbers = [12, 7, 4, 9, 16, 21, 8];

const grouped = separateNumbers(numbers);

console.log("Even Numbers:", grouped.even);
console.log("Odd Numbers:", grouped.odd);
