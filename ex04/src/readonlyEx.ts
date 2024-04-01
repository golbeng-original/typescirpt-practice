
// readonly는 객체 형식에만 적용가능한듯하다.

function readonlyTest(num:readonly number[]) {
    //num.push(1) <- 이런 매서드 호출 못함
}

// 가변인자 표현

export function varargFunc<T>(...arrays:T[]) {

    for(let element of arrays) {
        console.log(element)
    }
}