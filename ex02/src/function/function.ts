
// 함수 선언문 스타일
function add(a: number, b:number) : number {
    return a + b
}

const sub = function(a:number , b:number) {
    return a - b
}

// 함수 시그니처 사용
export const printMe:(arg0: string, arg1: number) => void = function(name:string, age:number): void {
    console.log(`name = ${name}, age = ${age}`)
}

const add1 = (a:number, b:number) : number => a + b

type NumberToNumber = (arg0:number) => number

export const add2 = (a:number): NumberToNumber => {
    const _add2:NumberToNumber = (b:number):number => {
        return a+b
    }

    return _add2
}

export function add3(a:number) : (arg0:number) => number {

    return function(b:number) {
        return a+b
    }
}