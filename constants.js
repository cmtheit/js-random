// range是可以下标访问的数据结构，其0下标和1下标分别代表所要生成的字符的上限和下限。
import {generateCharsFromRange} from './generateFromRange.js';
// 随机字符串生成的默认长度
const randomLengthRange = [5, 20];
// 使用默认长度的符号
let randomLengthSymbol = Symbol('Random Length, 5~20');

// 各种字符集
// 数字
const numberChars = generateCharsFromRange(['0', '9']);
// 十六进制
const xdigitChars = generateCharsFromRange(['0', '9'], ['a', 'f'], ['A', 'F']);
// 大写
const upperChars = generateCharsFromRange(['A', 'Z']);
// 小写
const lowerChars = generateCharsFromRange(['a', 'z']);
// 大小写
const alphaChars = upperChars.concat(lowerChars);
// 字母和数字
const alNumChars = numberChars.concat(alphaChars);
// 可打印字符
const printableChars = generateCharsFromRange([32, 126]);

function test(){
    console.log("数字字符：", numberChars);
    console.log("十六进制数字字符", xdigitChars);
    console.log("大写字母：", upperChars);
    console.log("小写字母：", lowerChars);
    console.log("字母字符：", alphaChars);
    console.log("字母和数字字符：", alNumChars);
    console.log("可打印字符：", printableChars);
}

export {numberChars, xdigitChars,
    upperChars, lowerChars, alphaChars, alNumChars,
    printableChars,
    randomLengthSymbol, randomLengthRange}

