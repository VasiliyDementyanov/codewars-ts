/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. 
E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the second kata in series:

Find the unique number
Find the unique string (this kata)
Find The Unique
*/

// my
export function findUniq(arr: string[]): string {
    let uniqueString = "";

    const stringsArr: string[] = [];
    arr.forEach((s) => {
        stringsArr.push(
            [
                ...new Set(s.toLowerCase().replace(" ", "").split("").sort()),
            ].join("")
        );
    });

    stringsArr.forEach((s) => {
        if (s !== "" && stringsArr.indexOf(s) === stringsArr.lastIndexOf(s)) {
            uniqueString = arr[stringsArr.indexOf(s)];
        }
    });

    return uniqueString;
}

// bp
export function findUniq(arr: string[]): string {
    let newArr = arr.map((a) => [...new Set(a.toLowerCase())].sort().join(""));
    return arr.find(
        (str, i) => newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])
    )!;
}
