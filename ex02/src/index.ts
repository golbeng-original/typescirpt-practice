
import IPerson from './person/IPerson'
import { makePerson } from './person/Person'
import { printMe, add3} from './function/function'

import {KeyValueType, makeObject} from './type/type'

const testMakePerson = (): void => {
    let jane:IPerson = makePerson('Jane')
    let jack:IPerson = makePerson('Jack')

    console.log(jane, jack)
}

testMakePerson()

printMe('asdfsf', 10)

let value = add3(2)(3)
console.log(`value = ${value}`)

const value2 = makeObject('asdf', '31')
console.log(value2)