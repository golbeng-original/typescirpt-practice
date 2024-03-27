typescirpt 설정
==============

### VS Code 관련 확장
1. TypeScript Debugger

### 관련 패키지

#### 1. typescirpt
```bash
$ npm install -D typescript
```
typescirpt 문법을 javascript 문법으로 변환하기 위한 패키지

#### 2. ts-node
```bash
$ npm install -D ts-node
```
dev 모드에서 *.ts 파일을 tsc 변환 없이 바로 실행 시키기 위한 패키지

#### 3. @types/node
```bash
$ npm install -D @types/node
```
typescript는 기본적으로 javascirpt 문법을 포함하고 있지만, 자바스크립트와 완전히 다른 언어이다.

떄문에 관련 된 라이브러리(chance, ramda)들은 추가로 @types/chance, @types.ramda와 같은 타입 라이브러리들을 제공해야 한다.

또한 자바스크립트에서 제공하는 기본 타입들의 존재도 그냥은 알지 못하므로, `@types/node`라는 패키지를 설치해줘야 한다.

tsconfig.json 파일
=================
tsconfig.json 파일은 타입스크립트 컴파일러의 설정 파일이다.

해당 파일은 `tsc --init` 명령으로 만들 수 있다.

> 전역으로 typescript가 설치 되어 있지 않은 경우 </br>
> npx tsc --init 으로 실행하면 됨

src 디렉토리에 대하여
----------------
tsconfig.json 에는 include 항목이 있다.
```
"include" : ["src/**/*"]
```
src 폴더 아래의 파일들은 전부 컴파일 대상이다.

typescirpt 디버깅 하기
-------------------
tsconfig.json에서 sourceMap 항목이 있다.
```
"sourceMap" : true
```
위 옵션이 *.ts 파일과 *.js 파일을 맵핑 시켜준다.