/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// my
export function rgb(r: number, g: number, b: number): string {
    const convertToHex = (c: number) => {
        if (c > 255) {
            return "FF";
        }
        if (c < 0 || c === 0) {
            return "00";
        }
        let cH: string = c.toString(16).toUpperCase();
        if (cH.length === 1) {
            return "0" + cH;
        }

        return cH;
    };

    return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

// bp
function dig(n: number): string {
    return (n > 255 ? 255 : n < 0 ? 0 : n)
        .toString(16)
        .toUpperCase()
        .padStart(2, "0");
}
export function rgb(r: number, g: number, b: number): string {
    return dig(r) + dig(g) + dig(b);
}
