module.exports = function toReadable(number) {
    let result = '';
    let stringNumber = `${number}`;
    let h, t, d; // hundreds, tens, digits
    const readableNumber = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: `fourteen`, 15: `fifteen`, 16: `sixteen`,
        17: `seventeen`, 18: `eighteen`, 19: `nineteen`,
        20: 'twenty', 30: 'thirty', 40: `forty`, 50: `fifty`, 60: `sixty`, 70: `seventy`, 80: `eighty`, 90: `ninety`,
        100: `hundred`
    };

    switch (stringNumber.length) {
        case 3:
            h = stringNumber[0];
            t = stringNumber[1];
            d = stringNumber[2];
            hundreds(stringNumber);
            break;
        case 2:
            comlpeteString();
            t = stringNumber[1];
            d = stringNumber[2];
            tens(stringNumber);
            break;
        case 1:
            comlpeteString();
            d = stringNumber[2];
            digits(stringNumber);
            break;
        default:
            break;
    }

    function hundreds() {
        result += readableNumber[`${h}`] + ' ' + readableNumber[`100`];
        tens();
    }
    function tens() {
        if (t === '1') {
            if (+h > 0) {
                result += ' ' + readableNumber[`${t + d}`] // 10 - 19
            } else
                result += readableNumber[`${t + d}`] // 10 - 19
        } else if (+t > 1) {
            if (+h > 0) {
                result += ' ' + readableNumber[`${t + 0}`] // 20, 30, 40 ,,, 90
            } else
                result += readableNumber[`${t + 0}`] // 20, 30, 40 ,,, 90
        }
        if (+d > 0) digits();
    }
    function digits() {
        if (t !== '1') {
            if (+d > 0 && (+t > 1 || +h > 0)) {
                result += ' ' + readableNumber[`${d}`]; // 1 - 9
            } else result += readableNumber[`${d}`]; // 1 - 9
        }
    }

    return result;

    function comlpeteString() {
        while (stringNumber.length < 3) {
            stringNumber = '0' + stringNumber;
        }
    }
}