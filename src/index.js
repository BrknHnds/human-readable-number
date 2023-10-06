// module.exports = function toReadable(number) {
//     const readableNumber = {
//         1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eigth', 9: 'nine', 0: 'zero'
//     };
//     let result = '';
//     let numberArr = number.toString();
//     numberArr.forEach((element, index) => {
//         result += readableNumber.Number(element);
//     });
//     return result;


// }

function toReadable(number) {
    let result = '';
    let stringNumber = `${number}`;
    const readableNumber = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eigth', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: `fourteen`, 15: `fiveteen`, 16: `sixteen`, 
        17: `seventeen`, 18: `eighteen`, 19: `nineteen`,
        20: 'twenty', 30: 'thirty', 40: `fourty`, 50: `fivety`, 60: `sixty`, 70: `seventy`, 80: `eghtty`, 90: `ninety`,
        100: `hundred`
    };
    if (stringNumber.length === 3) {
        result += readableNumber[stringNumber[0]] + ' ' + readableNumber[100];
        if ((stringNumber[1] && stringNumber[2]) !== '0') {
            result += ' ' + 'and';
        }
    }
    // if (stringNumber.length === 2) {
        // if (Number(stringNumber[2]+stringNumber[3]) > 19) {
            // result += readableNumber[`${stringNumber[2]}0`]; doesn't work
        // }
    // }
    console.log(result);
}
toReadable(999);