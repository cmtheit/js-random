
// 从 collector 中随机取得一个元素
import {Probability} from "./probability.js";

// 传入一系列可迭代对象（有length或size属性表示其大小）， 返回的函数每次调用随机从当初传入的所有可迭代对象抽取一个元素
function randomChoice(...collector){
    let totalLen = 0;
    for (let i of collector){
        totalLen += i.length || i.size;
    }
    const pro = new Probability(totalLen);
    for(const s of collector){
        for (var i of s){
            if (pro.ok()){
                break;
            }
        }
    }
    return i;
}

export {randomChoice}
