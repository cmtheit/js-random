// 传入字符集，随机生成指定长度或随机长度的

// 从指定字符串生成字符串的函数
// 可定制函数：
// randomString函数
/* 传入一系列的字符集
 */

import {
    numberChars,
    upperChars,
    lowerChars,
    alNumChars,
    alphaChars,
    randomLengthRange,
    randomLengthSymbol,
    printableChars
} from "./constants.js";
import {randomChoice} from "./randomChoice.js";
import {randomInt} from "./randomNumber.js";

function randomString(...collection){
    return function (length = randomLengthSymbol) {
        if (length !== randomLengthSymbol && Math.trunc(length) <= 0){
            return "";
        }
        length = length === randomLengthSymbol ? randomInt(...randomLengthRange) : Math.trunc(length);
        let res = "";
        for (let i = 0; i < length; ++i) {
            let over = randomChoice(...collection)
            res = res.concat(over);
        }
        return res;
    }
}

// 随机数字字符串
const randomNumberString = randomString(numberChars);

// 随机大写字母字符串
const randomUpperString = randomString(upperChars);

// 随机小写字母字符串
const randomLowerString = randomString(lowerChars);

// 随机字母字符串
const randomAlphaString = randomString(alphaChars);

// 随机字母数字字符串
const randomAlNumString = randomString(alNumChars);

// 随机可打印字符串
const randomPrintableString = randomString(printableChars);

function test(){
    console.log(randomNumberString(), randomUpperString(),randomLowerString(), randomAlphaString(), randomAlNumString(), randomPrintableString())
}

export {randomAlNumString, randomAlphaString, randomLowerString, randomUpperString, randomNumberString, randomString}





