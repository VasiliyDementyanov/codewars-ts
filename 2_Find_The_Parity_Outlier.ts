/*
You are given an array (which will have a length of at least 3, 
but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers 
except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// my
export function findOutlier(integers: number[]): number {
    type TEvenOdd = {
        even: number[];
        odd: number[];
    };

    const evenOdd: TEvenOdd = {
        even: [],
        odd: [],
    };

    for (let i of integers) {
        i % 2 === 0 ? evenOdd.even.push(i) : evenOdd.odd.push(i);
    }

    return evenOdd.even.length === 1 ? evenOdd.even[0] : evenOdd.odd[0];
}

// bp
export function findOutlier(integers: number[]): number {
    const odds = integers.filter((v) => v % 2);
    const evens = integers.filter((v) => !(v % 2));

    return odds.length === 1 ? odds[0] : evens[0];
}
