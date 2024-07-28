module.exports = function toReadable(number) {
    const UnitsObj = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const specialNumbersObj = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tensObj = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const hundredsObj = {
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred",
    };

    const hundred = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;
    const specialNumbers = number % 100;

    let result = "";

    if (number === 0) {
        return "zero";
    }

    if (hundred > 0) {
        result += `${hundredsObj[hundred]} `;
    }

    if (specialNumbers >= 10 && specialNumbers < 20) {
        return (result += `${specialNumbersObj[specialNumbers]}`);
    }

    if (tens > 0) {
        result += `${tensObj[tens]} `;
    }

    if (units > 0) {
        result += `${UnitsObj[units]}`;
    }

    return result.trim();
};
