/*
以下函数名尽量与ctype中相应函数相同
用js实现了部分 ctype 库函数
本模块提供判断一个字符所属字符集（数字、英文字母等），以及一枚额外的可定制工厂函数

可用于定制的函数：
    oneInOther(...other) 行数：9。
    传入任意个可迭代对象，返回一个判断成员关系的函数，传入一个对象判断是否在该组可迭代对象中。
*/
import {alphaChars, upperChars, lowerChars, numberChars, alNumChars, printableChars} from "./constants.js";

function oneInOther(...other){
    return function (one) {
        for (const collec of other) {
            for (const i of collec){
                if( i === one){
                    return true;
                }
            }
        }
        return false;
    };
}


const isalpha = oneInOther(alphaChars);

const isupper = oneInOther(upperChars);

const islower = oneInOther(lowerChars);

const isdigit = oneInOther(numberChars);

const isalnum = oneInOther(alNumChars);

const isprintable = oneInOther(printableChars);

export {oneInOther, isprintable, isalnum, isdigit, islower, isalpha, isupper};


