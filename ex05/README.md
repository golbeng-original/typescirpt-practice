제너릭
====

### keyof
```typescript
const pick = (obj, keys) => keys
                .map(key => ({[[key]: obj[key]]}))
                .reduce((result, value) => ({...result, value}))

const obj = {name: 'Jane', age: 32}
const pickObj1 = pick(obj, ['name', 'age'])
// {name: 'Jane', age: 32} 정상
const pickObj2 = pick(obj, ['nam', 'ag'])
// {name: undefined, ag: undefined} 비정상
```

위와 같은 상황을 방지 하지 위한 키워드

이것은 `인덱스 타입 제약`이라고 부른다.

아래와 같이 `pick`함수를 수정하였다.
```typescript
const pick = <T, K extends keyof T>(obj:T, keys:K[]) => {
    keys.map(key => ({[key] : obj[key]}))
        .reduce((result, value) => ({...result, ...value}))
}
```

> 위와 같이 잘못된 key 값을 넣게 되면 key부분에서 컴파일 오류를 발생 시킨다.