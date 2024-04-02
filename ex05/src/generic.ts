// 제너릭 인터페이스
interface IValueable<T> {}

// 제너릭 함수 구문
function identity<T>(arg:T) : T { return arg }

// 제너릭 타입 별칭
type IValueableType<T> = {
    value:T
}

// 클래스 제너릭 구문
class Valueable<T> {
    constructor(public value:T) {}
}

// 제너릭 함수
const printValue = <T>(o:T) => { console.log(o) }

const printValue2 = function<T>(o:T) {
    console.log(o)
}

// 제너릭 타입 제약
const create = <T extends {new() : T}>(type:T) => { return new type() }
const create2 = <T>(type:new() => T) => { return new type() }
const create3 = <T>(type: {new(...args:any): T}, ...args:any):T => { return new type(...args)}

class SomeClass {
    value:number = 0
}

const instnae = create2(SomeClass)
instnae.value = 30

console.log(instnae.value)

// key of

export const pick = <T, K extends keyof T>(obj:T, keys:K[]) => {
    return keys.map(key => ({[key] : obj[key]}))
        .reduce((result, value) => ({...result, ...value}), {})
}