
欢迎，这个包提供生成随机字符串和数字的api，你还可以使用三种工厂函数： 
oneInOther(...other)
    此函数接受若干可迭代对象，返回一个函数。返回的函数接受一个参数，用严格全等号判断该参数是否在所传入所有可迭代对象的并集中。
generateFromRange(transformMethod, lowerBound, upperBound);
    此函数文档见 generateFromRange.js
randomChoice(...collector) 
    此函数接受若干可迭代对象，返回一个函数。返回的函数接受0个参数，用于从指定的可迭代对象的并集中一相同的概率返回一个成员。

Welcome, this package provides an API for generating random strings and numbers. You can also use three factory functions:
oneInOther(... other)
This function takes several iterables and returns a function. The returned function takes an argument and uses a strict full equality sign to determine whether the argument is in the union of all iterables passed in.
generateFromRange(transformMethod, lowerBound, upperBound);
This function is documented in generateFromrange.js
randomChoice(... The collector)
This function takes several iterables and returns a function. The returned function takes 0 arguments that return a member with the same probability from the union of the specified iterable.