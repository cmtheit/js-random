// function

import {
    numberChars,
    xdigitChars,
    upperChars,
    lowerChars,
    alphaChars,
    alNumChars,
    printableChars,
} from "./js-chengmin-random/constants.js";
import {
    oneInOther,
    isprintable,
    isalnum,
    isdigit,
    islower,
    isalpha,
    isupper
} from "./js-chengmin-random/ctype.js";
import {
    generateNumbersFromRange,
    generateCharsFromRange,
    generateFromRange
} from "./js-chengmin-random/generateFromRange.js";
import {Probability} from "./js-chengmin-random/probability.js";
import {
    randomAlphaChar,
    randomAlNumChar,
    randomUpperChar,
    randomLowerChar,
    randomPrintableChar,
    randomNumberChar,
} from "./js-chengmin-random/randomChar.js";
import {randomChoice} from "./js-chengmin-random/randomChoice.js";
import {randomInt, randomFloat} from "./js-chengmin-random/randomNumber.js";
import {
    randomAlNumString,
    randomAlphaString,
    randomLowerString,
    randomUpperString,
    randomNumberString,
    randomString
} from "./js-chengmin-random/randomString.js";

export {
    // 各种字符集
    numberChars,
    xdigitChars,
    upperChars,
    lowerChars,
    alphaChars,
    alNumChars,
    printableChars,

    // 以下是所有函数api
    oneInOther,
    isprintable,
    isalnum,
    isdigit,
    islower,
    isalpha,
    isupper,

    generateFromRange,
    generateNumbersFromRange,
    generateCharsFromRange,

    // random Chars
    randomChoice,
    randomAlphaChar,
    randomAlNumChar,
    randomNumberChar,
    randomUpperChar,
    randomLowerChar,
    randomPrintableChar,

    // random Strings
    randomString,
    randomUpperString,
    randomLowerString,
    randomNumberString,
    randomAlphaString,
    randomAlNumString,

    // random Numbers
    randomInt,
    randomFloat,
    // 一个类，用分数表示概率，用 ok() 函数来测试本次调用是否为 true
    Probability
}