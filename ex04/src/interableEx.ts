
// 순수 제작 버전
export class ManualRangeIterable {

    constructor(public from:number, public to:number) {}

    // for..of에 적용하라면 아래 메서드를 정의 해야 한다.
    [Symbol.iterator]() {
        const that = this
        let currValue = this.from

        // 객체 반환 (that, currValue 클로저 적용)
        return {
            next : () => {
                const value:number | undefined = currValue < that.to ? currValue++ : undefined
                const done:boolean = value == undefined

                return {value, done}
            }
        }
    }
}

type TypeArg = string | undefined

type ReturnValue = {
    value:TypeArg,
    done:boolean
}

// 상속 버전
export class RangeIterable implements Iterable<TypeArg> {
    
    constructor(private strings:string[] = [], private currIndex:number = 0) {}

    /*
    [Symbol.iterator]():Iterator<TypeArg> {
        
        const that = this
        let currIndex = that.currIndex
        let length = that.strings.length

        const iterator:Iterator<TypeArg> = {
            next(): ReturnValue {
                const value = currIndex < length ? that.strings[currIndex] : undefined
                currIndex++
                
                const done = value === undefined

                return {value, done}
            }
        }

        return iterator
    }
    */
   [Symbol.iterator]():Iterator<TypeArg> {
        
        return {
            next():ReturnValue {
                return {value: 'aaa', done: true}
            }
        }
   }
}

// 생성기 yield

export function* generator() {
    console.log('generator started')
    for(let i = 1 ; i <= 4 ; i++) {
        yield i
    }
    console.log('generate finished')
}