// 실행 단축키: ctrl + f5
// 주석: ctrl + /
// 파일이나 폴드 리네임: f2
console.log("hello world");
console.log("호랑이");

//ex3) File - Preferences > User Snippets > javascript
// 주석을 푼다.
// single quote도 문자열로 사용
console.log('');

// ex4)
var a = 10;
console.log(a); // var >> let

let b = 20;
console.log(b);

const c = 30;
console.log(c);

// ex5)
let x = 10;
console.log(a);
let y = 'tiger';
let z = true;
let d = 3.14;
let e = [];
let f = {};
let g = function(){};
let h = undefined;
console.log(typeof(y)); // string
console.log(typeof(z)); // boolean
console.log(typeof(d)); // number
console.log(typeof(e)); // object
console.log(typeof(f)); // object
console.log(typeof(g)); // function
console.log(typeof(h)); // undefined

// ex6)
// key: value >> JSON
let obj = {
    a:10,
    b:'tiger',
    c:true,
    d:[],
    e:{},
    f:function(){},
    g:undefined
}

console.log(typeof(obj)); // object
console.log(typeof(obj.a)); // string
console.log(typeof(obj.b)); // boolean
console.log(typeof(obj.c)); // number
console.log(typeof(obj.d)); // object
console.log(typeof(obj.e)); // object
console.log(typeof(obj.f)); // function
console.log(typeof(obj.g)); // undefined

// ex7)
let test = {
    a:{
        b:{
            c:{
                d:10
            },
        },
    },
}
let test2 = {
    a:1000, 
    b:'tiger',
    c:3,
}
console.log(typeof(test.a.b.c.d));
console.log(test.a.b.c.d);

// ex8)
let apple = 10;
console.log(apple, typeof(apple));
// 메모리 생성
// appple = new number();
// 사용할 수 있다.
// 메모리 해제
// delete(apple);

// number타입의 메모리가 삭제된다.
// string 타입의 메모리가 생성된다.
// delete(apple);
// apple = new String();
apple = 'tiger';
console.log(apple, typeof(apple));

// 동적 타입 변경
let b = 10;
b = 'lion';
b = function(){}; // b는 function타입 됨
b = {}; // b는 객체 타입 됨

// ex9) var, let차이 - 지역성의 유지 여부
// var(지역성을 유지 하지 못함)
// let()
{   
    // 지역성을 유지 하지 못하고 a 사용 가능
    var a = 10;
    let b = 10;
}
console.log(a); // 10
console.log(b); // exception 발생

// ex10) const
const a = 10;
console.log(a);
a = 20;
console.log(a);

// ex11) undefined, null
// 타입이 정의 되지 않았다. 
//  a의 타입은 undefined
let a = undefined;
// 타입은 정해진다. (Object)
// 참조하는 값이 없다. 
let b = null;

console.log(typeof(a)); // undefined
console.log(typeof(b)); // object

b = {};

a = 10; 
b = 20;


// ex12)문자열 연결
let str = "호랑이";
str += '코끼리';
console.log(str);

let s = '100';
let n = 100;
console.log(s+n); // 100100 문자열 연결
console.log(Number(s)+n); // 200
console.log(String(n)+200); // 200

// 문자열을 >> 숫자로 변환 >> 
// 1. Number(); 
// 2. parseInt(); 숫자 아닌 문자를 넣어도 거르고 숫자로 바꿔줌
let s1 = '100';
let s2 = '200원';
console.log(Number(s1)+1);
console.log(parseInt(s2)+1);

// 슈가 코드
let s3 = '10';
let s4 = +'10'; // 슈가 코드
let s5 = 999 + +s3;
console.log(typeof(s3)); // string
console.log(typeof(s4)); // number
console.log(typeof(s5)); // number
console.log(s5); // 1009

// ex13)
// 산술, 관계, 논리 연산 동일
// 증가, 감소 연산자 동일
// +=, 복합대입연산자 동일
// true, false
// 4대 제어문 동일
// 삼항연산 동일
console.log(Math.pow(2, 3));
console.log(2**3);
// 예측 1) 2의 3승 결과를 2승 한다. 
// 예측 2) 2의 3승의 2승 >> 정답
console.log(2**3**2);

//ex14) 
let a = 10;
let b = 0x10; // 16진수 표기
let c = 0o777;
let d = 0b010101010; 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// 자바에서
// int b = 0077; error x
// int a = 0386; error 맨앞이 0이면 8진수 취급-> 8은 들어갈 수 없다. 

// ex15) 
// 값이 같은가?
console.log(10==10); // true
// 값과 타입이 같은가?
console.log(10===10); // true

console.log(10=='10'); // true
console.log(10==='10'); // false

console.log(10===10.0); // true

console.log(7/4); // 1.75 >> 자바와 달리 정확한 값이 출력됨
console.log(7%4); // 3

// 셋다 문자열 취급 
console.log('한글');
console.log("한글'과'컴퓨터"); // 문자열안에서 ''를 문자로 표현하고 싶을 때
let t = 999;
console.log(`한${t}글`); // 외부에 있는 변수를 문자열 안에서 출력하고 싶을 때

// ex16)
// 문자열안에 태그를 표현할 수 있다. 
let str = '<h3>호랑이</h3>'; // '\n', '\t' 탭 처리 

let first = 'tiger';
let last = 'lion';

console.log(`My name is ${first} and ${last}`);
console.log(`${1+2}`);
let a = 3; 
let b = 4;
console.log(`${a}+${b}=${a+b}`);

// ex17) SYMBOL 타입

// 1.
let obj1 = {
    a : 10,
}
// 실행시간에 필요에 따라서 키값을 추가 할수 있다. 
obj1.b = 20;
console.log(obj1.a);
console.log(obj1.b);

// 2.
let obj2 = {
    a : 10,
}
// 실행시간에 필요에 따라서 키값을 추가 할수 있다. 
obj2['b'] = 20;
console.log(obj2['a']);
console.log(obj2['b']);

// 3. 라이브러리로 제공된 객체일 때
let obj3 = {
    a: 10,
    b: 20
}

obj3['b'] = 30;
console.log(obj3['b']);

// 4. 
let obj4 = {
    a:10,
    b:20,
    myfunc:function(){
        return this.a + this.b;
    }
};
console.log("---------------------");
// 키를 새로 만들었다고 생각하고 작성했다. 
obj4['b'] = 30;
console.log(obj4['b']); // 30
console.log(obj4.myfunc(),obj4['b']); // 40 30

// 5.
let obj5 = {
    a:10,
    b:20,
    myfunc:function(){
        return this.a + this.b;
    }
};

let b = Symbol('b'); // 심볼타입이다.
obj5[b] = 999; // 중복 키 없이 사용하게 되는 변수가 만들어짐
console.log(obj5.myfunc()); // 30
console.log(obj5['b']); // 20
console.log(obj5[b]);  // 999

let obj6 = {
    a:20,
    b:30,
    // 함수가 사용하게 되었을 때
    // 실행시간으로 변경되는 결과에 대하여
    // 어떻게 예측할 수 있는가? 
};
 
obj6['b'] = 10;

// ex18)

let str = 'apple';
console.log(str.length);

let n = new Date();
console.log(typeof(n)); // object
console.log(typeof(Date)); // function
console.log(typeof n);

console.log(n.getFullYear(), '년');
console.log(n.getMonth(), '월'); // 월은 0부터 출발
console.log(n.getDate(), '일');
console.log(n.getDate(), '일');
//0이 일요일
console.log(n.getDay(),'요일');
console.log(n.getHours(),'시');
console.log(n.getMinutes(),'분');
console.log(n.getSeconds(),'초');

// ex19) Date()를 이용하여 1초동안 for문의 반복횟수를 얻는다.
let start = new Date().getTime();
// start + 1000 >> 1초
// 지역변수 얻고자 var사용
for (var i = 0; new Date().getTime() < start+1000; i++) {
}
console.log(i);

// ex20)

// 1
let start = new Date().getTime();
console.log(start);
while(new Date().getTime() < start+ 1000);
console.log('end');

// 2
// 인수 전달할 때 타입 선언 불필요
function fu(num){
    console.log(num);
}
fu(500);
// 함수 이름 빼버리기 >> 즉시 실행 함수 (만들고 호출하고 치워버리기, 두번사용x)
(function (num){
    console.log(num);
})() // 즉시 실행 함수 실행

(function(num){
    console.log(num);
})(1000);

// 3 
// 시간 지연 함수
(function(num){
    console.log("시간지연시작",num/1000);
    let start = new Date().getTime();
    while(new Date().getTime() < start+ num);
})(3000);

console.log('end');

// ex21) 짧은 if문

if(true){
    console.log('100');
}
let num = 10;
num > 7 && console.log('100');

// true
if(!false) {
    console.log('20');
}

// (num>20) || console.log('30');
false || console.log('30');

// ex22) 함수를 나타내는 다양한 형태
// 1. 
f1(); // 호출을 먼저 해버림 >> 함수를 호이스팅 할 수 있다. 
function f1(){
    console.log('1');
}

// 2. 함수를 변수로 받아버림 
let f2 = function() {
    console.log('2');
}
f2(); // 호이스팅 할 수 없다. 

// 3. 람다 함수
let f3 = () =>{
    console.log('3');
}
f3();

// 4. 즉시 실행 함수(IIFE)
(function(){
    console.log('4');
})();

// 5. IIFE + 람다 
(()=>{
    console.log('4');
})();

// 6. 람다 인수 전달
((num)=>{
    console.log(num);
})(6);

// 7. 리턴 처리
let result = ((num)=>{
    return num * 10;
})(6);

// 8. 첫자가 대문자로 출발한다. 
// 생성자 함수(== 클래스) 
function F4() {
    this.name = '호랑이'
    this.age = 100

    this.f1 = function(){
        console.log(this.name);
    }

    this.f2 = ()=>{
        console.log(this.age);
    }
}

let obj = new F4();
obj.f1();
obj.f2();
console.log(obj.name, obj.age);
obj.name

// ex23)
function t1() {
    console.log('t1');
}
function t2(num){
    console.log(num);
}
t2(10);
function t3(){
    return 100;
}
console.log(t3());
function t4(num){
    return num * 10;
}
console.log(t4(10));

// ex24)

// 1.
let count = {
    num: 0,
    increase: function(){
        this.num++;
        console.log(this.num);
    }
}
console.log(count.num);
count.increase();

// 2.
let person = {
    name:'tiger',
    sayHello:function(){
        console.log(`${this.name}`);
    }
}
person.sayHello();
console.log(person);
console.log('end');

// 3. 
let empty = {

}

// 4. 속성을 ''으로 정의할 수 있다.
let obj01 = {
    'name': 'tiger', // 특수문자 없다면 '' 안써도됨
    'age': 10,
}
console.log(obj01.name, obj01.age); // tiger 10

// 5.
let obj02 = {};
let key = 'hello';
obj02[key] = 'world';
console.log(obj02.hello);
console.log(obj02);

// 6. 키 이름을 숫자로 정의하면 자동으로 문자열 처리됨
let obj03 = {
    0:10,
    1:20,
    '2':30,
};
// console.log(obj03.0); 안된다.
// console.log(obj03,'0'); 안된다.
// 둘다 된다. 
console.log(obj03[0]);
console.log(obj03['0']);

// 7. 가장 나중에 정의된 속성으로 된다. 
// 속성 사용 방법 2가지
let obj04 = {
    age:10,
    age:20,
}
console.log(obj04);
console.log(obj04.age, obj04['age']);
// 익셉션 발생
// console.log(obj04[age]);

// 8.
let obj05 = {
    a:10,
};
// 속성 갱신
obj05.a = 20;
// 속성 생성
obj05.b = 30;
// 속성 삭제
delete obj05.a;

console.log(obj05);

// 9. 
let x=3, y=4;
let obj06 = {
    x:x, // 속성:값
    y:y,
}
console.log(obj06.x, obj06.y);

// 10. xx: yy: 생략가능
let xx=5, yy=6;
let obj07 = {
    xx,
    yy,
}
console.log(obj07);

// 11.
let xxx=5, yyy=6;
let obj08 = { xxx, yyy,}
console.log(obj08);

// 12.  
let prefix = 'prop';  
let ct = 0;
let obj09 = {};
obj09['prop-0'] = 0;
obj09[prefix+'-'+ ++ct] = 0;
for (let i = 2; i < 5; i++) {
    obj09[prefix + '-'+i] = 0;
}
console.log(obj09);

// 13. 12번 연장 예제
// 대충 버리는 문법
let obj10 = {
    [`${prefix}-${ct}`]: 99,
}
console.log(obj10);

function ff(){

}
// 14.
let obj11 = {
    // 메소드(new를 이용해서 객체로 생성할 수 있다.)
    // 생성자 함수로서의 역할을 할 수 있다.
    f1:function(){
        console.log(`1`);
    },
    // 메소드 (new를 이용해서 객체로 생성할 수 없다.)
    f2(){
        console.log(`2`);
    }
}
let tt10 = new obj11.f1();
let tt11 = new obj11.f2();

// ex25) 가변 인수 함수
function f1() {
    console.log(typeof arguments);
    console.log(arguments.length);

    let sum = 0;
    for (const key in arguments) {
        console.log(key, arguments[key]);
        sum += arguments[key];
    }
    console.log(sum);
}

//f1(10);
//f1(10,20);
f1(77,88,99);

// ex26) 내부 함수
// 1.
let f1 = function(){
    console.log('1');
    let f2 = function(){
        console.log('2');
    }
    f2();
}
f1();

// 2. 함수를 리턴한다.
let f3 = function(){
    console.log('1');
    return function(){
        console.log('2');
    }
}
f3()();

// 3.
let f4 = function(a, b) {
    console.log(a+b);
    return function(c,d,e) {
        console.log(c+d+e);
    }
}
f4(10, 20)(10, 20, 30);

// 4.
let f5 = function(a){
    a();
    return function(c){
        c();
    }
}
f5(function(){
    console.log(99);
})(function(){
    console.log(100);
});

// ex27) cf >> callback 함수
let f1 = function(cf){
    cf();
}
let f2 = function(){
    console.log('f2 call');
}
// 1. 
f1(f2);

// 2.
f1(function(){
    console.log('ex2');
})

// 3.
f1(()=>{
    console.log('ex3');
})

// 4.
const f3 = function(){
    console.log('1');
    const f4 = function(){
        console.log('2');
    };
    // return f4(); // 주의
    return f4; 
}
f3()();

// 5.
const f5 = function(){
    console.log('1');
    return function(){
        console.log('2');
    };
};
f5()();

// ex28)
// 1.
(function(){
    console.log('1');
    return function(){
        console.log('2');
    };
})()();

// 2. 
(()=>{
    console.log('1');
    return()=>{
        console.log('2');
    }
})()();

// 3. 
((cf)=>{
    cf();
    console.log('1');
    return(cf1)=>{
        cf1();
        console.log('2');
    }
})(()=>{
    console.log('tiger');
})(()=>{
    console.log('lion');
});


// ex29)
// 1.
let c1 = function(a) { return a*10; }
console.log(c1(2));

// 2. 람다 수정
let c2 = (a) => { return a*10; }
console.log(c2(2));

// 3. 인수 전달이 1개일 떄 괄호 생략 가능
let c3 = a => { return a*10; }
console.log(c3(2));

// 4. 람다에서 return 단문장일때 return을 생략할 수 있다.
// 단, {}도 같이 생략해야 한다.
let c4 = a => a*10;
console.log(c4(2));

let c5 = function(){
    return 100;
    return 'tiger';
    return ()=>{};
    return {a:10, b:20};
}
let obj01 = c5();
console.log(obj01.a, obj01.b);

let c6 = () => {
    return {a:10, b:20};
}
// return 과 {}빼고 나니까 남아있는 {}가 함수의 {}인지 
// 객체의 {}인지 모호한 사항이 발생
let c7 = () => ({a:10, b:20});
let obj02 = c7();
console.log(obj02.a, obj02.b);

// ex30)
// 1. 기본 함수 정의
(a)=>{};
// 2. 실제 실행 코드
((a)=>{})();
// 3. a, b둘다 실행
((a)=>{
    console.log('1');
    ((b)=>{
        console.log('2');
    })();
})();
// 4.
((a)=>{((b)=>{})();})();
// 5. 즉시 실행을 안한다고 한다면
((a)=>{((b)=>{
    console.log(a+b);
})(10);})(20);
// 6. 
let c1 = (a)=>{(b)=>{console.log(a+b);}};
// 7.
let c2 = (a) => {(b)=>{}};
// 8.
let c8 = a => {b=>{}};
// 9.
// let c4 = a =>b => a+b;
// let c4 = (a) => (b) => a+b;
// let c4 = (a) => (b) => {return a+b};
// let c4 = (a) => {return(b)=>{return a+b}};
let c4 = (a) =>{
    return (b)=>{
        return a+b;
    }
}
console.log(c4(10)(20));

// ex31) 클로저 함수
const f1 = function(){
    let a = 100; // 지역변수를 생명연장 시킨다.
    return function(){
        console.log(a);
    }
}
f1()();

// ex32) setTimeout
// - 비동기 함수: 코드의 실행순서를 지키지 않는 함수
console.log('1');
// 비동기 함수가 없으면 함수가 블로킹
// 비동기 함수를 동기화 시킨다.
setTimeout(
function(){
    console.log('2');
},2000);
console.log('3');

// ex33) setInterval
console.log('1');
let id = setInterval(
    function(){
        console.log('2');
    },1000);
// setTimeout(function(){
//     clearInterval(id);
// },5600)
setTimeout(
    ()=>{
    // 버튼이 클릭되었을 때
    clearInterval(id);
    },
    5600
);
console.log('3');

// ex34)
console.log('test');

1.
for(var i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}

2. 
for(var i=0; i<3; i++){
    (function(num){
        setTimeout(
            ()=>{
                console.log(num);
            }, 1000
        );
    })(i);
}

// 3.
for(let i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000);
}

// ex35) eval():문자열을 코드로 해석해서 실행해주는 함수
let str='';
str += 'let a = 10;';
str += 'console.log(a)';

eval(str);

// client >> 문자열을 만든다 (js 코드를 만든다) >> 서버에 날린다
// 문자열을 받았다 >> eval을 이용해서 실행결과를 만들 수 있다 client
// 실행결과를 >> 클라이언트에 전송

//     배열             객체
// 1.   []               {}
// 2. index사용    속성(key:value)
// 3. forEach가능    forEach불가
// 4. length가능      length불가

// ex36)
let obj = {
    s:'tiger',
    n:10,
    b:true,
}
console.log(obj);
console.log(obj.s, obj,n, obj.b);
console.log(obj['s'], obj['n'], obj['b']);

// 출력 순서가 보장되지 않는다.
for(const key in obj){
    console.log(key, obj[key]);
}

// with 키워드
with(obj) {
    console.log(s, n, b);
}

// ex37)
const obj = {
    // obj = this <-> a (바인딩)
    a:10, 
    b:20,
    f1:function(){
        console.log(this.a, this.b);
    },
    // 람다에서 this를 사용할 수 없다. 
    f2:()=>{
        console.log(this.a, this.b);
    },
    f3:function(){
        for(const key in this){
            console.log(key, this[key]);
        }
    }
}
// obj.f1();
// obj.f2();
obj.f3();
let c = 'dd';
let apple = {
    a:10, 
    b:'tiger',
    [c]:30
}
console.log(apple);

const obj01 = {
    a:10
}

obj01.b = 20;
obj01['c'] = 30;

for (let i = 0; i<3; i++){
    obj01['lion'+i] = i*10;
}
console.log(obj01);

console.log('end');

// ex38)
const obj = {
    a:10,
    b:20,
}
console.log(obj);

// 키 값만 얻는다
console.log(Object.keys(obj));

let a = Object.keys(obj);
console.log(typeof a);
console.log(Array.isArray(a));

// value 값만 얻을 수 있다.
console.log(Object.values(obj)); 

// ex39) 객체 병합
const obj01 = {
    a:10,
    b:20,
}
const obj02 = {
    b:10,
    d:20,
}

// 병합 방법1)
const obj03 = Object.assign(obj01, obj02);
console.log(obj03);

// 병합 방법2) 90% : spread operator
const obj04 = {...obj01, ...obj02};

let apple = (banana)=>{
    console.log(banana);
}

apple({...obj01, ...obj02});

// ex40)
// 1.
let ar = [10, 20, 30];
console.log(ar); //[10, 20, 30]
console.log(typeof ar); //object
console.log(Array.isArray(ar)); // true

// 2. 비어있는 배열
let br = Array();
console.log(br.length); // 0

// 3. 
let cr = Array(5);
console.log(cr.length); //5

// 4. 
let dr = Array(40, 50, 60);
console.log(dr) //[40, 50, 60]

// 5. 모든 타입을 적용할 수 있다.
let er = [10, 'tiger', true, [], {},function(){},undefined];

// ex41)배열 반복
let ar = [10, 20, 30];

// for in
for(const index in ar){
    console.log(index, ar[index]);
}

// for of(value, item, v)
for (const value of ar){
    console.log(value);
}
// forEach 함수를 사용할 수 있다.
ar.forEach((v,i)=>{
    console.log(v, i);
});

// 기존에 가지고 있는 데이터를 가공해서 새로운 데이터를 생산한다.
let br = ar.map((value)=>{
    console.log(value);
    return value * 10;
});
console.log(br);

let cr = ar.map(value=>value * 10);
console.log(cr);

// ex42)
let ar = [10, 11, 12, 14];
let br = ar.map(v=>v%2===0?'Even':'Odd');
console.log(br);

// ex43)
let ar = [
    {
        n:'tiger',
        a:10,
    },
    {
        n:'lion',
        a:10,
    },
    {
        n:'cat',
        a:30,
    },
];

console.log(ar);
for(const index in ar){
    console.log(ar[index].n, ar[index].a);
}

for(const v of ar){
    console.log(v.n, v.a);
}

ar.forEach((v,i)=>{
    console.log(v);
})
let br = ar.map((v,i)=>{
    return v.n;
});

console.log(br);

// ex44) 배열 함수 (*func:스스로 갱신)
// 1. toString
let ar = [10, 20, 30, 40];
let str = ar.toString();
console.log(str, typeof str);

// 2. 
let date = new Date();
console.log(date.toLocaleString());

// 3. pop()* : 맨 마지막 요소가 삭제됨 
ar.pop();
console.log(3, ar);

// 4. push()*
let num = ar.push(20);
console.log(4, ar, num);

let br = [77,88,99];
ar.push(br);
console.log(5, ar); // 배열안에 배열이 들어감 >> 병합이 일어나지 않는다.
console.log(ar[4]);

// 5. 
let cr = [10, 20, 30];
let dr = [40, 50];
// 스스로는 갱신되지 않는다
let er = cr.concat(40);
console.log(cr);
console.log(er);

let fr = cr.concat(dr);
console.log(fr);

fr = cr.concat([88,99]);
console.log(fr);

// 6. join(구분자를 삽입하면서 문자열을 연결한다)
let gr = ['tiger','lion','cat','dog'];
console.log(gr.join());
console.log(gr.join( '+' ));

// 7. reverse()* *>>데이터가 자체적으로 갱신된다
console.log(gr.reverse());

// 8. shift >> 첫번째 요소 가리킴
let t1 = gr.shift();
console.log(t1);
console.log(gr);

gr.unshift('rose');
console.log(gr);

// ex45) 배열 정렬

// 주의 : 우연히 정렬된 것 
let ar = [80, 20, 10, 15];
console.log(ar);
ar.sort();
console.log(ar);

let br = [52, 273, 103, 32];
console.log(br);
br.sort();
// [103, 273, 32, 52]
console.log(br);

let cr = [99, 52, 13, 42, 66, 21];

// cr.sort(정렬시키는 기준을 함수로 작성);
cr.sort((a, b)=>{
    // 내가 함수안에서 직접 정렬하는 것은 아니다
    // 정렬 기준을 코드로 작성하면 sort가 참고한다
    // 순차 정렬로 해석한다
    // if(a>b){
    //     return +1;
    // }else {
    //     return -1;
    // }
    // ( a > b ) ? +1 : -1;
    // 순차 정렬코드
    (a-b); 
    // 역순 정렬
    (b-a);
});
console.log(cr)
// true false대신 함수를 사용하면 응용이 가능함

//
let dr = [
    {
        n:30,
        s:'월',
    },
    {
        n:20,
        s:'월',
    },
    {
        n:10,
        s:'수',
    }
]

dr.sort((a, b)=>{
    return a.n - b.n;
})

console.log(dr);

console.log('');

// ex46) 배열: slice
let ar = [1, 2, 3, 4, 5, 6, 7, 8];
// 2부터 4-1 까지
let br = ar.slice(2,4);
console.log(br); // 3, 4
// slice(시작위치, 삭제 수, 추가항목, 추가항목, ...)

// splice(시작위치, 삭제 수,추가항목, ...)
let cr = [1, 2, 3];
cr.splice(1, 0, 4, 5, 6, 7); //[1, 4, 5, 6, 7, 2, 3]
cr.splice(1, 1, 4, 5, 6, 7); //[1, 4, 5, 6, 7, 3]

// indexOf
let dr = ['lion','tiger','dog','cat','tiger'];
console.log(dr.indexOf('tiger')); // 1
console.log(dr.indexOf('tig')); //-1
console.log(dr.indexOf('tiger', 2)); // 4
console.log(dr.lastIndexOf('tiger')); // 4

let er = [1, 30, 39, 29, 10, 13];

function f1(data){
    return data < 30;
}
function f2(data){
    return data < 0;
}
console.log(er.every(f1));
console.log(er.some(f2));

console.log('');
let fr = [1, 3, 5, 7];
console.log(f2.some((value)=>{
    return value % 2 === 0;
}));

// ex47) filter

let ar = [1, 30, 38, 29, 10, 13];
let br = ar.filter((v)=>{
    return v<30;
})
console.log(br); //[1, 29, 10, 13]

let cr = [
    'tiger',
    'lion',
    'dog',
    'cat',
    'rose',
];
console.log(cr.filter((v)=>{
    return v.length >= 4
}));

//         문자열      배열        객체
// length    o         o           x
// forEach   x         o           x
// forin     o         o           o
// forof     o         o           x
// map       x         o           x
