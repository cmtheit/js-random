import {randomInt} from "./randomNumber.js";

// 传入一系列可迭代对象（有length或size属性表示其大小）， 返回的函数每次调用随机从当初传入的所有可迭代对象抽取一个元素
function randomChoice(...collector){
    let totalLen = 0;
    for (let i of collector){
        totalLen += i.length || i.size;
    }
    let N = randomInt(1, totalLen);
    for(const s of collector){
        if (N <= (s.length || s.size)){
            var theS = s;
            break;
        }else {
            N -= (s.length || s.size);
        }
    }
    for (var res of theS){
        if(!--N){
            break;
        }
    }
    return res;
}
function test(){
    let randomfromSet = randomChoice(new Set([1,3,4,5]), new Set([..."hello world!"]));
    let randomFromArrayAndString = randomChoice([1,2,4,5,6], "hello world!");
    console.log(randomfromSet, randomFromArrayAndString);
}


function test(){
    let randomfromSet = randomChoice(new Set([1,3,4,5]), new Set([..."hello world!"]));
    let randomFromArrayAndString = randomChoice([1,2,4,5,6], "hello world!");
    console.log(randomfromSet, randomFromArrayAndString);
}

export {randomChoice}
