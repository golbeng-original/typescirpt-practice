/// 함수형 프로그래밍을 다룬다.

import fold from './fold'
import filter from './filter'
import {varargFunc} from './readonlyEx'

import printTuple from './tupleEx'
import {ManualRangeIterable, RangeIterable, generator} from './interableEx'

const intArray:number[] = [1,2,3,4,5,6,7,8,9,10]

// 순수 제작 고차 함수
const foldResult = fold(intArray, (acc, i) => acc + i, 0)
console.log(`foldResult = ${foldResult}`)

const filterResult = filter(intArray, (value) => value % 2 === 0)
console.log(`filterResult = ${filterResult}`)


const newValue = intArray
                .filter(val => val % 2 != 0)
                .map(val => val * val)
                .reduce((prevValue, currValue) => prevValue * currValue, 1)

console.log(`newValue = ${newValue}`)

varargFunc(1, 2, 3, 4, 5)

printTuple()

const iter = new ManualRangeIterable(3, 5)
for(let e of iter) {
    console.log(`iter value = ${e}`)
}

const iter2 = new RangeIterable(['hello', 'world', '!!'])
for(let e of iter2) {
    console.log(`iter2 value = ${e}`)
}

for(let e of generator()) {
    console.log(e)
}