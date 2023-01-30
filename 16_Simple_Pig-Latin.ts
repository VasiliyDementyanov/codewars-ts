/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// my
export const pigIt = (a: string): string => {
    const isWholeWord = (str: string): boolean => {
        const letterArray: string[] = str.match(/[a-z]/gi) || [];
        return letterArray.length === str.length;
    };

    const splitedWords: string[] = a.split(" ");
    const editedWords: string[] = [];
    for (let word of splitedWords) {
        if (word === "") {
            editedWords.push(word);
            continue;
        }

        if (isWholeWord(word)) {
            editedWords.push(word.slice(1) + word.charAt(0) + "ay");
        } else {
            editedWords.push(word);
        }
    }

    return editedWords.join(" ");
};

// bp
export const pigIt = (a: string) => a.replace(/(\w)(\w+)*/g, "$2$1ay");
