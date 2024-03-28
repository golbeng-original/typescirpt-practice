import IPerson from "./IPerson"

const MAX_AGE = 100

class Person implements IPerson {
    constructor(
        public name:String, 
        public age:number
    ) {}
}

function makeRandomNumber(max:number = MAX_AGE) : number {
    return Math.ceil(Math.random() * max)
}

export const makePerson = (name:String, age:number = makeRandomNumber()):IPerson => ({name, age})

