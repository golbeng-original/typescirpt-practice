/// 비동기 학습 Promise, async/await 구문

import {readFileSync, readFile} from 'fs'

import {readFilePromise} from './promise'

import {pick} from './generic'

//const buffer:Buffer = readFileSync('./package.json')
//console.log('read sync')
//console.log(buffer.toString())

//readFile('./package.json', (error:Error | null, buffer:Buffer) => {
//    console.log('read async')
//
//    console.log(buffer.toString())
//})s

/*
(async () => {
    try {
        const content = await readFilePromise('./package.json')

        console.log(content)
    
        console.log('done!!')
    }
    catch(e) {
        console.log(typeof e)
        console.log(e)
    }

})()
*/

const obj = {name: 'Jane', age: 32}

const result1 = pick(obj, ["name", "age"])
console.log(result1)

