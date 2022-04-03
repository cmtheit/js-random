// 本模块是从各种字符集中生成随机字符的函数

import {randomChoice} from "./randomChoice.js";
import {
    numberChars,
    alphaChars,
    upperChars,
    lowerChars,
    alNumChars,
    printableChars
} from "./constants.js";
// 生成随机阿拉伯数字字符
const randomNumberChar = randomChoice(numberChars);

// 生成随机大写英文字母字符
const randomUpperChar = randomChoice(upperChars);

// 生成随机小写英文字母字符
const randomLowerChar = randomChoice(lowerChars);

// 生成随机字母字符
const randomAlphaChar = randomChoice(alphaChars);

// 生成随机字母或阿拉伯数字
const randomAlNumChar = randomChoice(alNumChars);

// 生成随机可打印字符
const randomPrintableChar = randomChoice(printableChars);

export {
    randomAlphaChar,
    randomAlNumChar,
    randomNumberChar,
    randomUpperChar,
    randomLowerChar,
    randomPrintableChar
}