// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
    const repetedValues = str
        .split('')
        .filter((element, index, array) => array.indexOf(element) !== index);

    return repetedValues.length > 0 ? false : true;
}
