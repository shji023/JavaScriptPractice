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

/*
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
*/