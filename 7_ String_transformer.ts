/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

// my
export function stringTransformer(str: string): string {
    let newStringArr: string[] = str.split(" ").reverse();

    for (let i = 0; i < newStringArr.length; i++) {
        newStringArr[i] = Array.from(newStringArr[i])
            .map((c) =>
                c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()
            )
            .join("");
    }

    return newStringArr.join(" ");
}

// Sveta
export function stringTransformer(str: string): string {
    str = str.split(" ").reverse().join(" ");
    let newStr: string = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr = newStr + str[i].toLowerCase();
        } else {
            newStr = newStr + str[i].toUpperCase();
        }
    }

    return newStr;
}
