함수형 프로그래밍
=============

### readonly
인터페이스, 클래스, 함수의 매개변수 등은 let, const 키워드 없이 선언한다.

그러므로 readonly는 위와 같은 상황에서 사용한다.

readonly는 객체 형식에만 적용가능한듯하다.

### 생성기

Iterable 상속하여 객체가 반복자에서 동작하도록 하기
```typescript
class RangeIterable implements Iterable<number>
{
    [Symbol.iterator]():Iterator<number> {
        return {
            next():{value:number, done:boolean} {
                return {value: 'aaa', done: true} 
                // 끝은 {value:undefined, done:false}
            }
        }
    }
}
```

생성기 구문 yield
```typescript
function* generator() {
    for(let i = 0 ; i < 4 ; i++) {
        yield i
    }
}
// yield 는 {value:number, done:boolean} 객체를 반환한다.
```
