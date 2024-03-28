
// type으로 별칭 만들기

type stringNumberFunc = (agr0: string, arg2: number) => void

export const f:stringNumberFunc = function(a:string, b:number): void {
    console.log(`a = ${a}, b = ${b}`)
}

export type KeyValueType = {
    [key: string] : string
}

// ()를 사용하는 이유 {}만 쓰면 복합 실행문으로 판단한다.
export const makeObject = (key: string, value: string) : KeyValueType => ({[key]: value})

