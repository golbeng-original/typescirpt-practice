모듈화
====
import와 export에 대해서 다뤄본다.

내보내는 입장에서는 `export 키워드`를 사용하여, 심벌을 공개한다.

> export 키워드를 붙일 수 있는 키워드 </br>
> interface, type, class, let, const, function

export default 
--------------
위 키워드는 한 모듈이 내보내는 기능 중 오직 한개에만 붙일 수 있다.

함수
===
함수 시그니처
```
(매개변수 1 타입, 매개변수 2 타입 [, ...]) => 반환값 타입
```

별칭
===
type 키워드로 별칭 만들기
```
type 새로운 타입 = 기존 타입
```

비구조화 할당문
===========
```typescript
export type Person = {name:string, age:number}

export const makePerson = (name:string, age:number):Person => ({name, age})
```

구조화를 만드는 과정

`=> {name, age}` 로 표현 하지 않은 이유는  `{}` 해당 구문이 복합 실행문으로 읽혀서 이다.
`=> ({name, age})` 이렇게 표현해야 한다.

색인키와 값으로 객체 만들기
====================
```javascript
const makeObject = (key, value) => ({[key] : value})
```

`[key]`로 표현하는 이유는 key는 문자열 값을 가지고 있지만 `{[key] : value}`로 표현하면

key 값이 변수로 만들어 지게 된다.