/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

// my
export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) {
        return 0;
    }

    let arrsLengths: number[] = [];
    for (let a of arrayOfArrays) {
        if (a === null || a.length === 0) {
            return 0;
        }

        arrsLengths.push(a.length);
    }

    arrsLengths.sort((a, b) => a - b);

    for (let i = 0; i < arrsLengths.length; i++) {
        if (arrsLengths[i + 1] !== arrsLengths[i] + 1) {
            return arrsLengths[i] + 1;
        }
    }

    return 0;
}

// bp
export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
    const arraysLengths: Array<number> = arrayOfArrays
        .map((arr) => arr.length)
        .sort((a, b) => a - b);
    return arraysLengths.length && arraysLengths.indexOf(0) < 0
        ? isConsecutive(arraysLengths, 0)
        : 0;
}

function isConsecutive(arraysLengths: Array<number>, n: number): number {
    return arraysLengths[n + 1] - arraysLengths[n] == 1
        ? isConsecutive(arraysLengths, n + 1)
        : arraysLengths[n] + 1;
}
