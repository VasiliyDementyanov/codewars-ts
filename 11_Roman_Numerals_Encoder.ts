/*
Create a function taking a positive integer as its parameter and returning a string containing 
the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit 
separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 
1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
solution(1000); // should return 'M'

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
*/

// my
export function solution(number: number): string {
    const thousands = Math.trunc(number / 1000) * 1000;
    const hundreds = Math.trunc((number - thousands) / 100) * 100;
    const dozens = Math.trunc((number - thousands - hundreds) / 10) * 10;
    const ones = number - thousands - hundreds - dozens;

    let resultString = "";
    resultString += "M".repeat(thousands / 1000);

    if (hundreds >= 100 && hundreds <= 300) {
        resultString += "C".repeat(hundreds / 100);
    }

    if (hundreds === 400) {
        resultString += "CD";
    }

    if (hundreds === 500) {
        resultString += "D";
    }

    if (hundreds >= 600 && hundreds <= 800) {
        resultString += "D" + "C".repeat((hundreds - 500) / 100);
    }

    if (hundreds === 900) {
        resultString += "CM";
    }

    /***********/

    if (dozens >= 10 && dozens <= 30) {
        resultString += "X".repeat(dozens / 10);
    }

    if (dozens === 40) {
        resultString += "XL";
    }

    if (dozens === 50) {
        resultString += "L";
    }

    if (dozens >= 60 && dozens <= 80) {
        resultString += "L" + "X".repeat((dozens - 50) / 10);
    }

    if (dozens === 90) {
        resultString += "XC";
    }

    /***********/

    if (ones >= 1 && ones <= 3) {
        resultString += "I".repeat(ones);
    }

    if (ones === 4) {
        resultString += "IV";
    }

    if (ones === 5) {
        resultString += "V";
    }

    if (ones >= 6 && ones <= 8) {
        resultString += "V" + "I".repeat(ones - 5);
    }

    if (ones === 9) {
        resultString += "IX";
    }

    return resultString;
}

// bp
export function solution(number: number): string {
    const ROMAN = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let result = "";
    for (let k in ROMAN) {
        result += k.repeat(Math.floor(number / ROMAN[k]));
        number = number % ROMAN[k];
    }

    return result;
}
