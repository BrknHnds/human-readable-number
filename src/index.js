module.exports = function toReadable(number) {
    let result = '';
    let stringNumber = `${number}`;
    const readableNumber = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: `fourteen`, 15: `fifteen`, 16: `sixteen`,
        17: `seventeen`, 18: `eighteen`, 19: `nineteen`,
        20: 'twenty', 30: 'thirty', 40: `forty`, 50: `fifty`, 60: `sixty`, 70: `seventy`, 80: `eighty`, 90: `ninety`,
        100: `hundred`
    };

    switch (stringNumber.length) {
        case 3:
            hundreds(stringNumber);
            break;
        case 2:
            comlpeteString();
            tens(stringNumber);
            break;
        case 1: digits(stringNumber);
            comlpeteString();
            break;
        default:
            break;
    }

    function hundreds() {
        result += readableNumber[stringNumber[0]] + ' ' + readableNumber[100]
        tens();
    }
    function tens() {
        // if (((stringNumber[0] !== '0') && ((stringNumber[1] === '0')) || (stringNumber[0] !== '0' && stringNumber[1] === '1' && stringNumber[2] === '0'))) { 
        // лишнее, перед 10 не пишется "and"
        
        // if (((stringNumber[0] !== '0') && ((stringNumber[1] === '0')))) {
        //     result += ' ' + 'and';
        // } else 
        // эта часть похоже тоже не нужна, почти нигде не нужно добавлять "and"
        if ((stringNumber[2] !== '0') && ((+(stringNumber[1] + stringNumber[2]) > 10) && (+(stringNumber[1] + stringNumber[2]) < 20))) {
            result += ' ' + readableNumber[+(stringNumber[1] + stringNumber[2])];
            return result;
        } else {
            result += ' ' + readableNumber[`${stringNumber[1]}0`];
        }
        digits();
    }
    function digits() {
        if (stringNumber[2] !== '0') {
            result += ' ' + readableNumber[stringNumber[2]];
        }
    }
    return result;

    function comlpeteString() {
        while (stringNumber.length < 3) {
            stringNumber = '0' + stringNumber;
        }
    }
}

// function toReadable(number) {
//     let result = '';
//     let stringNumber = `${number}`;
//     const readableNumber = {
//         0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
//         10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: `fourteen`, 15: `fiveteen`, 16: `sixteen`,
//         17: `seventeen`, 18: `eighteen`, 19: `nineteen`,
//         20: 'twenty', 30: 'thirty', 40: `fourty`, 50: `fivety`, 60: `sixty`, 70: `seventy`, 80: `eghtty`, 90: `ninety`,
//         100: `hundred`
//     };

//     switch (stringNumber.length) {
//         case 3:
//             hundreds(stringNumber);
//             break;
//         case 2:
//             comlpeteString();
//             tens(stringNumber);
//             break;
//         case 1: digits(stringNumber);
//             comlpeteString();
//             break;
//         default:
//             break;
//     }

//     function hundreds() {
//         result += readableNumber[stringNumber[0]] + ' ' + readableNumber[100]
//         tens();
//     }
//     function tens() {
//         if ((stringNumber[0] !== '0') && (stringNumber[1] === '0')) {
//             result += ' ' + 'and';
//         } else {
//             result += ' ' + readableNumber[`${stringNumber[1]}0`];
//         }
//         digits();
//     }
//     function digits() {
//         result += ' ' + readableNumber[stringNumber[2]];
//     }
//     console.log(result);

//     function comlpeteString() {
//         while (stringNumber.length < 3) {
//             stringNumber = '0' + stringNumber;
//         }
//     }
// }
// toReadable(999);