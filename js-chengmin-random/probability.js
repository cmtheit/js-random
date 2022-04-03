class Probability{
    // 一个表示 sub 分之 sup 的概率对象，通过 ok 函数判断是否为 true
    constructor(sub=1, sup=1, trunc=false) {
        this.sub = sub;
        this.sup = sup;
        this.pro = this.sup / this.sub;
    }
    // 有 sup / sub 的概率为 true
    ok(){
        return Math.random() <= this.pro;
    }
}

export {Probability}