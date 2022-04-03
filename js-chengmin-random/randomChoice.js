
// 从 collector 中随机取得一个元素
import {Probability} from "./probability.js";

function randomChoice(...collector){
    let totalLen = 0;
    for (let i of collector){
        totalLen += i.length;
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
