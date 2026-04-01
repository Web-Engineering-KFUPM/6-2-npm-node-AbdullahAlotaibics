export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((result, num, index) => index === 0 ? num : result - num);
}

export function multiply(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];
    // Check for division by zero
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            return "Division by zero";
        }
    }
    return numbers.reduce((result, num, index) => index === 0 ? num : result / num);
}