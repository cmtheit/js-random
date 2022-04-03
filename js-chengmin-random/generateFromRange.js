/* 本模块从一个 range 参数的 0 和 1 下标生成一个包含介于它们之间的所有对象的数组
   可定制函数API：generateFromRange 行数： 4
   传入转换函数 transformMethod，下限函数 lowerBound 和上限函数 upperBound， 均为可选。
   返回一个函数，接受若干个二元数组，对每个二元数组的第一个成员调用 lowerBound函数， 第二个成员调用 upperBound函数，分别得到下限和上限（均为整数）
   而转换函数用于将每一个 下限和上限之间的值转换为新值，加入到返回的res数组中。
   调用示例如下
*/
function generateFromRange(transformMethod, lowerBound, upperBound){
    return function (...ranges) {
        let res = [];
        transformMethod = transformMethod || ((i) => i);
        lowerBound = lowerBound || ((r) => r[0]);
        upperBound = upperBound || ((r) => r[1]);
        for (const range of ranges) {
            for (let i = lowerBound(range); i <= upperBound(range); ++i) {
                res.push(transformMethod(i));
            }
        }
        return res;
    }
}


// 生成的函数的调用见 constans.js 10、12、14、16行，此函数的作用一目了然
// 此函数用于从所给出的二元字符或数字数组中得到范围内的连续字符数组。如 ['a', 'z'] 传入将返回：
// [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
// ]
const generateCharsFromRange = generateFromRange(
    String.fromCharCode,
    (range) => range[0].charCodeAt ? range[0].charCodeAt(0) : range[0],
    (range) => range[1].charCodeAt ? range[1].charCodeAt(0) : range[1]
)

// 将从数字上下限产生连续的数字数组
const generateNumbersFromRange = generateFromRange();

export {generateNumbersFromRange, generateCharsFromRange, generateFromRange }