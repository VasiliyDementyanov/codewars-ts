/*
For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]: [string, number]
where l (or L) is the length of the repetition. 
If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
["", 0]
In JavaScript: If you use Array.sort in your solution, 
you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. 
This is not a kata issue.

Happy coding! :)
*/

// my
export function longestRepetition(text: string): [string, number] {
    if (text === "") return ["", 0];

    let maxRepetitionObj = {
        count: 0,
        index: 0,
    };

    let resultArray: [string, number][] = [];
    let prevLetter = "";

    let currentI = 0;
    let count = 0;

    for (let c of text) {
        if (resultArray.length === 0) {
            resultArray.push([c, 1]);
            prevLetter = c;
            count++;
            continue;
        }

        if (c === prevLetter) {
            resultArray[currentI][1]++;
            count++;
        } else {
            if (maxRepetitionObj.count < count) {
                maxRepetitionObj.count = count;
                maxRepetitionObj.index = currentI;
            }

            count = 1;
            resultArray.push([c, 1]);
            prevLetter = c;
            currentI++;
        }
    }

    if (maxRepetitionObj.count < count) {
        maxRepetitionObj.count = count;
        maxRepetitionObj.index = currentI;
    }

    return resultArray[maxRepetitionObj.index];
}

// bp
export function longestRepetition(text: string): [string, number] {
    const output: [string, number] = ["", 0];
    text.match(/(.)\1*/g)?.forEach((match) => {
        if (match?.length > output[1]) {
            output[0] = match.charAt(0);
            output[1] = match.length;
        }
    });
    return output;
}
