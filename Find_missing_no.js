function findMissingNumber(numbers) {
    const n = numbers.length + 1;
    const expected = (n * (n + 1)) / 2;
    const actual = numbers.reduce((sum, num) => sum + num, 0);

    return expected - actual;
}

const numbers = [1, 2, 3, 5, 6];

console.log("Missing Number:", findMissingNumber(numbers));
