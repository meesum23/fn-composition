function compose(f,g){
    return function(x){
        return f(g(x));
    };
}

function addOne(x){
    return x + 1;
}

function multiplyByEight(x){
    return x * 8;
}

const addOneAndMultiplyByEight = compose(addOne , multiplyByEight);
console.log(addOneAndMultiplyByEight(2));