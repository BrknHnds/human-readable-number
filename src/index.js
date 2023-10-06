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
    const readableNumber = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eigth', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: `${this[4]} + teen`, 15: `${this[5]} + teen`, 
        16: `${this[6]} + teen`, 17: `${this[7]} + teen`,18: `${this[8]} + teen`,19: `${this[9]} + teen`, 
        20: 'twenty', 30: 'thirty', 40: `${this[4]} + ty`, 50: `${this[5]} + ty`, 60: `${this[6]} + ty`, 
        70: `${this[7]} + ty`, 80: `${this[8]} + ty`, 90: `${this[9]} + ty`,
        100: `${this.[1]} hundred`, 200: `${this.[2]} hundred`, 300: `${this.[3]} hundred`, 400: `${this.[4]} hundred`,
        500: `${this.[5]} hundred`, 600: `${this.[6]} hundred`, 700: `${this.[7]} hundred`, 800: `${this.[8]} hundred`,
        900: `${this.[9]} hundred`
    };
    let result = '';
    let numberArr = number.toString();
    numberArr.forEach((element, index) => {
        result += readableNumber.Number(element);
    });

}
console.log(toReadable(999));