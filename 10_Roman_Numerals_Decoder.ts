/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
solution('XXI'); // should return 21

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

// my
export function solution(roman: string): number {
    const RomanNumerals: any = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;
    for (let i = 0; i < roman.length; i++) {
        if (
            roman[i] === "I" &&
            roman.length - 1 !== i &&
            roman[i + 1] === "V"
        ) {
            sum += 4;
            i++;
        } else {
            sum += RomanNumerals[roman[i]];
        }
    }

    return sum;
}

// bp
const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function solution(roman: string): number {
    let value = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = values[roman[i]];
        const next = values[roman[i + 1]] || 0;
        if (current < next) {
            value -= current;
        } else {
            value += current;
        }
    }
    return value;
}
