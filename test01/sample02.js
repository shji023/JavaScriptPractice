// ex49)
let obj01 = {
    n:10,
    f1:function(){
        console.log(1);
        console.log(this.n);
    },
    f2:()=>{
        console.log(2);
        console.log(this.n);
    }
}
obj01.f1();
obj01.f2();

function Func(){
    this.n = 10;
    this.obj = {
        n:20,
        f1:function(){
            console.log(1);
            console.log(this.n);
        },
        f2:()=>{
            console.log(2);
            console.log(this.n);
        }

    };
}

let ins = new Func();
ins.obj.f1();
ins.obj.f2();

// ex50) 생성자 함수
// 일반적으로 생성자 함수안에서는 함수를 만들지 않는다
function Func(name, age){
    // this.name = 'tiger';
    // this.age = 10;
    this.name = name;
    this.age = age;
    this.f1 = function(){
        console.log(this.name, this.age);
    };
}
let ins = new Func('lion',20);
ins.f1();

// ex51)
// 1. 일반함수 
function f1(){
    return {
        a:10,
        f:function(){}
    }
}

let obj1 = f1();
let obj2 = f1();
console.log(obj1.f === obj2.f); // false

// 2. 생성자 함수
function F1(){
    this.a = 10;
    this.f = function(){}
}
let ins1 = new F1();
let ins2 = new F1();
console.log(ins1.f === ins2.f); // false

// 3. 생성자 함수
function F2(){
    this.a = 10;
}
// static
F2.prototype.f = function(){};

let ins3 = new F2();
let ins4 = new F2();
console.log(ins3.f === ins4.f);

// ex52)
// 1.
let obj = {
    
}

obj.f1 = function(){
    console.log(1);
}
obj.f1();

// 2.
function F1(){

}
F1.prototype.f1 = function(){
    console.log(2);
}
let ins = new F1();
ins.f1();

// ex53)
// 1.
let obj0 = { name: 'tiger0', n1:10, n2:60, }
let obj1 = { name: 'tiger1', n1:20, n2:70, }
let obj2 = { name: 'tiger2', n1:30, n2:80, }
let obj3 = { name: 'tiger3', n1:40, n2:90, }
let obj4 = { name: 'tiger4', n1:50, n2:10, }

let ar = [];
ar.push(obj0);
ar.push(obj1);
ar.push(obj2);
ar.push(obj3);
ar.push(obj4);

ar.forEach((v,i)=>{
    console.log(v.name, v.n1, v.n2);
});

// 2. 
let ar = [];
ar.push({ name: 'tiger0', n1:10, n2:60, });
ar.push({ name: 'tiger1', n1:20, n2:70, });
ar.push({ name: 'tiger2', n1:30, n2:80, });
ar.push({ name: 'tiger3', n1:40, n2:90, });
ar.push({ name: 'tiger4', n1:50, n2:10, });

ar.forEach((v,i)=>{
    console.log(v.name, v.n1, v.n2);
});

// 3. 
function makeInfo(name, n1, n2){
    return {
        name: name,
        n1:n1,
        n2:n2,
    }
    return obj;
}
let ar = [];
ar.push(makeInfo('tiger0', 10, 60));
ar.push(makeInfo('tiger1', 20, 70));
ar.push(makeInfo('tiger2', 30, 80));
ar.push(makeInfo('tiger3', 40, 90));
ar.push(makeInfo('tiger4', 50, 10));

ar.forEach((v,i)=>{
    console.log(v.name, v.n1, v.n2);
});

// 4.
function MakeInfo(name, n1, n2){
    this.name = name;
    this.n1 = n1;
    this.n2 = n2;
}

let ar = [];
console.log(new MakeInfo('tiger0',10,60));
ar.push(new MakeInfo('tiger0', 10, 60));
ar.push(new MakeInfo('tiger1', 20, 70));
ar.push(new MakeInfo('tiger2', 30, 80));
ar.push(new MakeInfo('tiger3', 40, 90));
ar.push(new MakeInfo('tiger4', 50, 10));

ar.forEach((v,i)=>{
    console.log(v.name, v.n1, v.n2);
});

// 5.
function MakeInfo(name, n1, n2){
    this.name = name;
    this.n1 = n1;
    this.n2 = n2;
}

let ar = [];
console.log(new MakeInfo('tiger0',10,60));
ar.push(new MakeInfo('tiger0', 10, 60));
ar.push(new MakeInfo('tiger1', 20, 70));
ar.push(new MakeInfo('tiger2', 30, 80));
ar.push(new MakeInfo('tiger3', 40, 90));
ar.push(new MakeInfo('tiger4', 50, 10));

ar.forEach((v,i)=>{
    // console.log(v.name, v.n1, v.n2);
    ar[i].sum = v.n1 + v.n2;
});

ar.forEach((v,i)=>{
    console.log(v.name, v.n1, v.n2, v.sum);
});

// 6.
function MakeInfo(name, n1, n2){
    this.name = name;
    this.n1 = n1;
    this.n2 = n2;
    ar.forEach((v,i)=>{
        console.log(v.name, v.n1, v.n2, v.sum);
    });
}

let ar = [];
console.log(new MakeInfo('tiger0',10,60));
ar.push(new MakeInfo('tiger0', 10, 60));
ar.push(new MakeInfo('tiger1', 20, 70));
ar.push(new MakeInfo('tiger2', 30, 80));
ar.push(new MakeInfo('tiger3', 40, 90));
ar.push(new MakeInfo('tiger4', 50, 10));

ar.forEach((v,i)=>{
    // console.log(v.name, v.n1, v.n2);
    ar[i].sum = v.n1 + v.n2;
});

MakeInfo.prototype.output = function(){
    console.log(this.name, this.n1, this.n2, this.sum);
}

for(const key in ar){
    ar[key].output();
}

// ex54) 상속
// 1. 
// function Apple(){
//     this.a = 10;
// }

// function Banana(){
//     this.b = 20;
// }

// Banana.prototype = new Apple();
// Banana.prototype.constructor = Banana;

// const obj = new Banana();
// console.log(obj.a, obj.b);

function Apple(){
    this.query = {
        name:'tiger',
        age:10,
    };
}

function Banana(){
    this.request = {
        x:10,
        y:20,
    };
}

Banana.prototype = new Apple();
Banana.prototype.constructor = Banana;

const ctx = new Banana();
console.log(ctx);
console.log(ctx.query.name); // ctx.query? 쓸 수 있는 근거 >> 누군가를 상속받고 있는 코드가 있음


// ex55) Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(3.14)); // 4
console.log(Math.ceil(-3.14)); // -3
console.log(Math.floor(3.14));
console.log(Math.floor(-3.14));
console.log(Math.round(3.5));
console.log(Math.round(-3.5));
console.log(Math.max(3, 5, 6, 7, 8, 9));
console.log(Math.min(3, 5, 6, 7, 8 ,9));
console.log(Math.pow(2, 3)); // **
console.log(Math.sqrt(4));
console.log(Math.sqrt(3)*Math.sqrt(3));

function degreeToRadian(degree){
    return Math.PI*degree / 180.0;
}
console.log(Math.sin(Math.PI * 30/180)); // radian값 구하기
console.log(Math.sin(degreeToRadian(30)));
console.log('');

for (let i = 0; i < 10; i++) {
    console.log(Math.random());
    console.log(Math.floor(Math.random()*10));    
}

// ex56) JSON >> 객체, 객체 >> JSON
let obj1 = {
    a:10,
    b:'tiger',
}
// 보낸다. 직렬화
let str = JSON.stringify(obj1); // 문자열로 변환이 되는데 데이터 전송하는데에 쓰면 됨
console.log(typeof str, str); // string {"a":10, "b":"tiger"}

// 받았다.(역직렬화)
let obj2 = JSON.parse(str);
console.log(typeof obj2, obj2); // object {a:10, b:'tiger'}

// ex57)

// 1.
const obj = {
    name:'tiger',
    age:10,

}

// 비구조화 할당
let { name, age }= obj;
console.log(name, age);

// 2.
function f1({name,age}){
    console.log(name, age);
}

f1(obj);

// 3. 
const ar = [10, 20, 30];
let [dog, cat, tiger] = ar;
console.log(dog, cat, tiger);

// 4. 
const obj2 = {
    aa: 'tiger',
    bb: 10, 
}
//aa:cc >> 리네임이 일어난다
let {aa:cc, bb:dd} = obj2;
// console.log(aa,bb);
console.log(cc,dd);

// ex5)
function f2({aa:cc, bb:dd}){
    console.log(cc,dd);
}
f2(obj2);

// 6. 

const payload = {
    data:{
        name:"tiger",
    }
}

const {data:post} = payload;
console.log(post);
console.log(post.name);

// ex58) 향상된 객체 리터럴
const a = 10;
const c = 30;
const obj = {
    a,
    b:20, 
    c
}
console.log(obj);

// 59) 함수의 디폴트 파라메터
function f1(a, b=1000, c='tiger'){
    console.log(a, b, c);
}
f1(10);
f1(10, 2000);
f1(10, 2000,'lion');
