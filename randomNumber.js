// 本模块函数生成随机数字

import { randomLengthRange} from "./constants.js";

function dec(F){
    return function (...range){
        range = range.length ? range : [...randomLengthRange];
        if (range.length != 2){
            console.error(`2 arguments expected, get ${range.length}\n`)
        }
        if (range[0] > range[1]){
            [range[1], range[0]] = [...range];
        }
        return F(range);
    }
}

function randomInt(range){
    // 传入二元组 range, range[0]表示下限，range[1] 表示上限， 均为闭区间
    // 从 range 规定的范围中取得上下限
    // 默认范围也为 [5, 20]
    return Math.round(Math.random() * (range[1] - range[0]) + range[0]);
}

function randomFloat(range){
    // 传入 二元组 range， range[0] 表示下限， range[1] 表示上限， 均为闭区间
    // 返回一个介于它们之间的随机小数
    return Math.random() * (range[1] - range[0]) + range[0]
}

randomInt = dec(randomInt);
randomFloat = dec(randomFloat);

function test(){
    console.log(randomInt(), randomFloat());
    console.log(randomInt(1,100), randomInt(-4, 2), randomInt(2, -4),
        randomInt(-4, -10), randomInt(-10, -4));
    console.log(randomFloat(-1, -3), randomFloat(3.45, 10.23), randomFloat(-12.4, 10.4),
            randomFloat(30, -12.4), randomFloat(-40, -4.1));
}

export {randomInt, randomFloat}