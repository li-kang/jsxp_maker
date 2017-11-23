---
categories:
    - js
---

 ## JavaScript

1995年诞生 ， （作者：布兰登·艾克）

### ECMAs Script

## 快速入门

js代码可以嵌网页的任何地方。

方式和css雷同，同样可以写在内部，外部，和行内，不过通常我们都把js放在`head`中

外部js引用，通过`<script src="js路径"></script>`

**浏览器按照顺序依次执行**

### 在页面输出一段文字

```javascript
alert("Hello Word");
console.log("控制台输出");
document.write("页面输出");
document.getElementById().innerHTML = "HelloWord";   //返回div中的所有内容
document.getElementById().style.background="red";
<div onclick="alert("Helloword")"></div>
```

### 1、基本语法

强调 ； 换行书写；  注释：// 或 /* */

## 数据

### 1、数据类型

* 一切事物都是由数据构成，例如：身高，位置，年龄...

举例：描述天气情况（字符串：“晴”），气温（数字：27°），是否下雨（布尔值：true/false）

```javascript
console.log(typeof "hello"); //string
console.log(typeof 3); //number
console.log(typeof true/false); //boolean
undefined
null
//typeof 检测数据类型
```

 1)字符串

> 字符串是以单引号或双引号括起来的任意文本，比如：`abc` ，注意：`""`或`''`本身只是一种表达方式，并不是字符串的一部分因此，字符串`abc`只有`a`,`b`,`c`这三个字符；

* 在`""`包括的字符串中可以直接使用`''` , 在`''`包括的字符串中可以直接用`""`

```javascript
alert("Here is 'huo xing shi dai'");
alert('Here is "huo xing shi dai"');
```

* 如果在`""`中包括`""` ,需要用反斜杠`\"` ，单引号同理

  ```javascript
  alert("你好 \"涛涛\" ");
  alert('你好 \'涛涛\' ');
  ```

* 用算术运算符 `+` 完成字符串拼接

  ```javascript
  alert("welcome" + "to" + "hxsd");
  ```

* 如果字符串之间用`"-"、"*"、"/"`运算，则会返回NaN，NaN意为`Not a Number`,代表非数字，用于表示不某个值不是数字（如果是数字型字符串做这样的运算，会发生数据类型转换）

  ```javascript
  console.log("welcome" - "to"); //结果为NaN
  ```

* 注意：“”和“ ”不同，前者叫空字符串，后者是空格字符串

  ```javascript
  alert("");
  alert(" ");
  ```

  转义字符：\n 和 br 相似

### 2、number

> js不区分整数和浮点数，统一用number表示，以下都是合法的number类型

```javascript
123; //整数
0.456; //浮点数
1.2345e3; //科学计数法
-99; //负数
NaN; //NaN表示Not a Number ,当无法计算结果时用NaN表示
```

### 3、布尔值

里面只有两个值：true/false，表示真或假，开或关。 

布尔值的意义：让计算机能够有逻辑的去判断事物。

### 4、基本算术运算符 + - * /

```javascript
console.log(3 + 5); //8
console.log(3 - 1.5); //浮点数1.5
console.log(3 - 5); //负数-2
console.log(3 * 5); //15
console.log(3 / 5); //0.6
console.log(0 / 0); //NaN ; 
console.log(1 / 0); //Infinity表示无穷大，当数值超过了js的number所能表示的最大值时，就表示为Infinity
```

### 5、隐式转换：+号在不同情况下的区别

```javascript
//自动数据类型转换
//字符串和数字相加是会把数字转换为字符串；数字与数字相加时才会参与运算；
console.log(3 + 5 + "hello"); // 8 hello
console.log("hello" + 3 + 5); // hello 3 5
```

## 变量

> 变量`variable` 的概念基本和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型

### 1、定义变量（注意大小写）

```javascript
//相当于一个杯子，你为杯子里面盛放什么，杯子里面的数据类型就是什么；
//变量：临时存储信息的容器，可以复用；

//1、申明变量，并起名 叫name；
var name;
//2、为变量赋值
name = "11";   //为变量赋值， = 等号：是把右侧的值，赋值给左侧的变量名
alert(name);
```

### 2、申明变量并同时赋值

```javascript
var a = 3;
console.log(a);//3

a = "hello";
console.log(a);  //hello

a = true;
console.log(a); //true

//同名变量产生覆盖
var s = '小红';
var s = '小丽';
alert(s);
```

### 3、变量数据类型 

```javascript
var a = 3;
console.log(typeof a);//number

a="hello";
console.log(typeof a);//string

a = true;
console.log(typeof a);//布尔值
```

### 4、变量大小写敏感

```javascript
var s = "小花";
var S = "小毛";
alert(s);
alert(S);
```

 ###  5、变量命名规范

```javascript
//可读性高的变量名
var a_local; //使用下划线
var username = "小星";
var _username = "小南";
var $total; //使用$命名
var userName = "小星"; //驼峰命名 ，第二个单词首字母大写
var isHappy = true; //布尔值使用is开头

//不能使用关键字或保留字，因为语言私有：例如
var false;
var true;
var boolean;
var var;
var function

var 涛涛 = "可以用中文哦！";
alert(涛涛);
```

### 6、undefined未定义

```javascript
//undefined有两种结果
1、真的就没定义；
2、定义了，但是未赋值；
var b;
alert(typeof b);
```

### JS弱类型语言总结：

1. 变量必须有一个明确的数据类型，否则是不规范写法，【值是undefined】；

2. 变量类型可变：

   ```javascript
   var a = "xiaoli";
   alert(typeof a);
   a = 123;
   alert(typeof a);
   ```

3. 变量只定义不赋值，就是undefined类型，undefined类型只有一个值undefined，表示未定义 或 只声明未给值得变量

   ```javascript
   var b;
   alert(b);
   ```

4. 输出一个未定义的变量会报错

   ```javascript
   alert(x);
   ```

   关系运算符

   ```javascript
   //关系运算符：>  <  >=  <=  !=   ==  ===	
   var num1 = 3;
   var num2 = 5;
   var result = num1 > num2; //fasle
   var result = num1 < num2; //true
   var result = num1 == num2; //fasle
   var result = num1 != num2; //true
   ```

   章子怡身份信息

   ```javascript
   //通过js把数据加到结构中，然后显示出来
   <h2>章子怡身份信息</h2>
   <p>身高：<span id="height"></span></p>
   <p>姓名：<span id="name"></span></p>
   <p>年龄：<span id="age"></span></p>
   <p>性别：<span id="sex"></span></p>
   <p>健康：<span id="isHealth"></span></p>
               
   var name = "章子怡";
   var height = 163.5;
   var age = 34;
   var sex = "女";
   var isHealth = true;
   document.getElementById("height").innerHTML = height;
   document.getElementById("name").innerHTML = name;
   document.getElementById("age").innerHTML = age;
   document.getElementById("sex").innerHTML = sex;
   document.getElementById("isHealth").innerHTML = isHealth;
   ```

   **变量小结**

   1. 基本数据类型有哪些？
      1. number，string，boolean，undefined；
   2. 变量定义的三种情况：定义已经赋值。定义未赋值（undefined）、未定义（出错！）

## 对象

> JS的对象是一种无序的集合数据类型，它是由若干个键值对组成。
>
> 变量只能保存单一的数据，比如姓名，性别等...    
>
> 如果将一个人的多个相关信息存储在一个变量中，则需要使用对象 

```javascript
var name = "小星";
var age = 22;
var sex = "男";

//申明对象
var obj = new Object();
obj.name = "小星";
obj.age = 22;
obj.sex = "男";

alert(obj.name+"的年龄是"+obj.age+",性别："+obj.sex);
```

### 1、JOSN的数据方式

```javascript
//实际来讲：简化定义对象的方式就叫json（JavaScript Object Notation）对象表示法

var person = {
  neme:'小星',
  age:22,
  sex:'男'
}
alert(person.name +"的年龄是："+person.age+",性别："+person.sex);
```

### 2、用` .`语法访问对象的数据

语法：

```javascript
//对象名.属性名
objectName.propertyName
```

### 3、null：（空对象，返回object）

* null表示一个空对象，”什么都没有“的意思，用来表示”无值“；
* 通常用作一个空引用，一个空对象的预期，就像一个占位符；

### 对象小结

`undefined` `NaN` `null` 三者的区别？

1. undefined：没有定义，声明了一个变量却没赋值时会返回 undefined

   ```javascript
   var a;
   alert(a); // undefined
   ```

2. nul: ”什么都没有“，空对象的引用

   ```javascript
   null === undefined //false
   null == undefined  //true 
   ```

3. NaN:"不是一个数"，Not a Namber，无法计算结果时，会返回NaN

   ```javascript
   typeof(NaN);  //Number
   var a = "hello" * 3; //a的值为NaN
   NaN === NaN; //false
   //NaN不等于任何值，连他本身也不等于
   ```

## 数组

> 数组是一组按顺序排列的集合，集合的每个值称为元素。

### 创建数组

```javascript
//当创建多个对象时，
var p1= {
  name:"小星",
  age:22,
  sex:"男"
}
var p2= {
  name:"小黄",
  age:12,
  sex:"女"
}
var p4{
  
}
//创建数组
var arr = new Array();
arr[0] = "张三";
arr[1] = "李四";
arr[2] = "王老师";
alert(arr[0] +","+arr[1]+","+arr[2]);
```

### 1、数组的定义

```javascript
//数组：一次性申请一批存储空间 - 引用类型
//var num = 3; 基本数据类型
//数组中可以存放任意数据类型，并通过索引访问每个元素
var arr = [];
```

### 2、向数组赋值

```javascript
arr[0] = "张三";
arr[1] = "李四";
arr[2] = "王老师";
```

### 3、数组字面量方式声明

```javascript
var arr = ["张三","李四","王老五"];
```

### 4、数组索引

与对象一样， 数组是数值的集合，不同的对象中每个数值都有一个名字，可以用名字获取对应的值，而数组的每个值都有下标值，用`数组名[下标值]`

```javascript
alert(arr[0]+","+arr[1]+","+arr[2]);
```

### 5、数组长度

length属性可以设置或返回数组元素的数量，length属性的值总是比数组定义的最后一个元素的索引值大 1；

```javascript
//语法格式：数组名.length
arrObject.length

//最后一个元素的索引值
arr.length-1
```

### 6、修改已有数组中的值

> Array 可以通过索引把对应的元素修改为新的值，因此，对**数组**的索引进行赋值会直接修改这个**数组**

```javascript
var arr = ["A","李四","C"];
arr[1]="李四他哥";
arr; //变为["A","李四他哥","C"]
```

### 7、数组越界

请注意：如果通过索引赋值时，索引超过了范围，同样会引起`Array`大小的变化

```javascript
var arr = [1,2,3];
arr[5] = "t";
arr; //arr变为[1,2,3,undefined,undefined,"t"];
```

### 8、数组方法indexof

> 数组可以通过indexof()  来搜索一个指定的元素的位置，如未找到返回-1；

```javascript
var arr = [10,20,'30','abc'];
console.log(arr.indexOf(10)); //返回索引0
console.log(arr.indexOf(30)); //返回-1
```

### 9、数组concat

`concat()` 方法把当前的数组和另一个数组连接起来，并返回一个新的`Array`

```javascript
var arr1 = ["a","b","c"];
var arr2 = [1,2,3];
var newArr = arr1.concat(arr2,"再次追加");
nesArr; //["a","b","c",1,2,3]
arr1; //["a","b","c"]
```

### 10、数组push和pop

`push()`向数组的末尾添加若干元素，`pop()`则是把数组的最后一个元素删除掉；

```javascript
var arr = [1,2];
arr.push("A","B");
arr;  //[1,2,"A","B"];

arr.pop() ; //返回"B"
arr; //打印[1,2,"A"];

arr.pop();arr.pop();arr.pop();//连续3次
arr; // []

arr.pop(); //空数组继续pop不会报错，而是返回undefined
arr;//
```

### 11、数组unshift和shift

`unshift`向数组前面添加若干元素， `shift`则是把数组的第一个元素删除

```javascript
var arr = [1,2];
arr.unshift("a","b");
arr; //打印 ["a","b",1,2];

arr.shift();
arr; //打印["b",1,2];

arr.shift();arr.shift();arr.shift();
arr;//打印[]
```

### 12、数组slice

`slice()`截取数组的部分元素，然后返回一个新的`Array`

```javascript
var arr = ["a","b","c","d","e","f","g"];
arr.slice(0,3);//从索引0开始，到索引3结束，但不包括3
arr.slice(3); //从索引3到结束，["d","e","f","g"]
```

如果不给`slice`传递任何参数，他就会从头到尾截取所有元素。

```javascript
var  arr = ["a","b","c"];
var aCopy = arr.slice();
aCopy; //["a","b","c"]
```

### 13、数组sort

`sort()`可以对当前的`Array`进行排序，他会直接修改当前数组的元素位置

```javascript
var arr = ["B","C","A"];
arr.sort();
arr; //["A","B","C"]
```

### 14、数组reverse

`reverse()` 把整个数组的元素给掉个个，就是反转；

```javascript
var arr = ["one","two","three"];
arr.reverse();
arr; //["three","two","one"];
```

### 15、数组join

`join()`方法可以把当前数组的每个元素都用指定的字符串连接起来，然后返回连接后的字符串

```javascript
var arr = ["a","b","c",1,2,3];
arr.join('-'); // a-b-c-1-2-3
//如果Array的元素不是字符串，将自动转换为字符串后再连接
```

### 16、数组splice

`splice()`方法是修改数组的万能方法，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素。

```javascript
//splice(索引值,删除数量,"值1","值2");
var arr = ["苹果","橘子","香蕉","芋头","桂圆","西瓜"];

//从索引2开始删除3个元素，然后在添加两个元素
arr.splice(2,3,"白梨","山楂");
console.log(arr); //打印["苹果","橘子","白梨","山楂","西瓜"]

//只删除，不添加
arr.splice(2,2)
console.log(arr); 

//只添加，不删除
arr.splice(2,0,"白梨","小西瓜");
console.log(arr);
```

### 二维数组

```javascript
var arr = [[1,2,3],['a','b','c'],500];
var x = arr[1][1]; // b
var arr = [[1,2,3],['a','b','c'],500];
			
var myClass = [
  {name:'章子怡',age:34,sex:"女"},
  {name:'陈坤',age:24,sex:"男"},
  {name:"涛涛",age:18,sex:"男"}
]

alert(myClass[0].name); //章子怡
```

## 运算

### 1、算术运算 + - * / % ++ --

> 通过运算操作数据（事物）的行为，运算表示行为
>
> 蜗牛爬井，一口井10米，蜗牛白天爬3米，夜晚滑2米。蜗牛几天爬出？

```javascript
//当前位置在井底，默认为0；
var position = 0;

//白天爬三米
position = position + 3;

//夜晚滑2米
position = position-2;

console.log("往上爬了"+ position + "步");
```

给定 y =3

|  描述  | 运算符  |       例子        |      结果      |
| :--: | :--: | :-------------: | :----------: |
|  加   |  +   |    x = y + 2    |    x = 5     |
|  减   |  -   |    x = y - 2    |    x = 1     |
|  乘   |  *   |    x = y * 2    |    x = 6     |
|  除   |  /   |    x = y / 2    |   x = 1.5    |
|  取余  |  %   |    x = y % 2    |    x = 1     |
|  递增  |  ++  | x = ++y; x= y++ | x = 4; x = 3 |
|  递减  |  --  | x= --y; x= y--  |  x= 2;x = 3  |

```javascript
console.log('20'-'5'); //会隐士转换：结果15.类型number
console.log('24ad'-'12ad'); //NaN 
console.log(100-''); //数字与字符串运算结果都数字，结果100
console.log(1/0); // Infinity无穷大。
console.log("4"/"2"); //结果2
console.log('8'%'3');//结果2
//总结：除了+ 号可以做字符串连接，其他运算基本都会做数据类型转换
```

#### 2、强制转换

```javascript
//函数
function name(){
    //执行的方法段
}
//鼠标事件
onclick="name()"

//比如说：一个字符串12 ，把字符转整数
parseInt("12"); //12

parseFloat(); //字符串取小数

isNaN(parseInt(str)); //判断是不是 非数字，非数字返回true
```

#### 3、数字转为字符串 toString()

```javascript
var num = 123;
var str = num.toString(); //转字符串
alert(typeof str); 
```

#### 4、+ 号字符串连接

```javascript
//连接两个或多个字符串：  srt = "hi , i was stunned by my own cleverness!" 嘿！我被自己的智商惊呆了！
str1 = "hi , i was stunned";
str2 = " ";
str3 = "by my own cleverness!"
str = str1 + str2 + str3; 
```

#### 5、取模运算

* 运算规则：两个数相处后取余数
* 结果：对10 取模得到一个不超过10的数

#### 6、运算符优先级

```javascript
var a = 2 + 3 * 5; //17
var b = (2+3)/(5-3); //2.5 
```

### 2、赋值运算

> 复合的赋值运算符 +=   -=  *=  /=  %=

#### 1、赋值运算符  = 特点：

* 变量的读写操作
* 赋值运算 是唯一 一种修改内存（写）的方式

```javascript
//编程思想
var a = 3;
a = a+1;
//第一步：读取a的值；
//第二步：运算a+1；
//第三步：把运算结果写会a；
```

**案例**

```javascript
//需求：假设某个人的工资是10000，现在要对其加薪10%；
var salary = 10000;
//salary = salary+salary*0.1;
salary+=salary*0.1
alert("现在的薪水是："+ salary); //11000 
```

#### 2、自增自减运算符

```javascript
var num = 0;
//num = num + 1;
//num+=1;
num++;  //1
num++;  //2
++num;  //3
console.log(num++);// 3
console.log(++num);//5

//后缀++：变量的值先参与其他运算，然后自身的值在增加
//前缀++：变量的值先自身+1，然后再用增加后的值参与运算

num--; //5
--num; //3
console.log(num--); //3
console.log(--num); //1

//思考案例
var i=5;
console.log(i++ + ++i);  //5 + 7 = 12 
alert(i);//7
console.log(i-- + --i);  //7 + 5  = 12
```

#### 3、加赋值 ‘+=’ 和减赋值‘-=’

```javascript
var x = 10;
x = x+2; //读取x的值，在运算x+2,运算结果写会x
x+=2
x -= 2 ;  //x = x-2  

x*=2;
x/=2;
x%=2;
```

#### 5、表达式

* 包含赋值运算的语句叫表达式
* 单独的运算不叫表达式

### 3、关系运算

> 关系运算：> < <=  >=  !=  ==  ===
>
> * 通过比较两个数组大小，返回布尔值

#### 1、比较两个值

```javascript
var num1 = 3;
var num2 = 5;
var result = num1>num2; //false
var result = num1<num2; //true
var result = num1==num2; //fasle
var result = num1 != num2; 
```

#### 2、==和===   !=与!==

```javascript
var a = 2;
var b = '2';
var c = 2;
console.log(a == c); //true, 类型相同，值相同
console.log(a === c); //true 类型相同，值相同
console.log(a !== c); //false a与c类型相同，值也相同

console.log(a == b); //true 把b转换为数字，检查是否相等
console.log(a != b); //false  非运算

console.log(a === b); //false 类型不同，直接返回false
console.log(a !== b); //true a与b类型不同

//总结：==和!= 先尝试转换类型，再做值比较，最后返回值比较结果；而===和!== 只有在相同类型下，才会比较里面的值
```

#### 3、字符串比较

```javascript
'2'=='2';  //true 两个操作数是数字字符串，先转换成数字，在进行比较
'a' != 'b'; //true 两个操作数是字母字符串，转成ascii码 再比较
'abc' < 'aad'; //false 依次比较ascii码
13 > 'abc'; //false abc 会转成NaN
```

**获取unicode字符编码**

```javascript
var str = 'abc';
alert(str.charCodeAt(0));//97 返回指定位置的字符的  Unicode编码
charAt(1);//返回字符串的子串
```

**给定 x = 3**

| 运算符  |    描述    |            例子             |
| :--: | :------: | :-----------------------: |
|  ==  |    等于    |        x==8为false         |
| ===  | 全等（值和类型） | x===3为true; x==="3"为false |
|  !=  |   不等于    |         x!=8为true         |
|  >   |    大于    |         x>8为false         |
|  <   |    小于    |         x<8为true          |
|  >=  |  大于或等于   |        x>=8为false         |
|  <=  |  小于或等于   |         x<=8为true         |

小结： “=”、“==”、“===” 这三种等号的区别？

* `=`：是赋值符号，是对变量所代表的的内存的写操作
* `==`：忽略数据类型的判断是否相等
* `===` ：数值和数据类型都要相等才判断为相等



### 4、逻辑运算

```javascript
//满足两个条件
var username = '小星';
var password = 'abc';
alert((username === '小星') && (password === 'abc'));   //true
```

#### 1、逻辑与 `&&`

二目运算

> 逻辑与&&（and） 并且的意思：若干条件中，只有都是true时（满足条件）条件才能为真

```javascript
//只有条件全部为true时才执行
alert(true && true);//两边都为true ，结果为true
alert(true && fasle);//有一个为false，结果为false
alert(false && (3>4)); //两边都为false，结果为false
alert(false && false); //false
```

#### 2、逻辑或`||`

> 逻辑或 || ，若干条件中，只要有一个满足，返回true

```javascript
true || true //结果true
false || true //结果true
true || false //结构true
false || （3==4）//结果false
```

#### 3、逻辑非 `!`

> 逻辑非！ 取反  !true的结果为false，!false 的结果为 true

```javascript
var n1 = !true; //fasle
var n2 = !false; //true
var n3 = !!true; //true
```

#### 复合逻辑表达式

```javascript
//中文：user等于小星 并且 年龄大于等于18 或者 地址是中国 并且 密码是123 
(user==='小星')&&(age>=18 || addr==='中国')&&(password==='123');
```

#### 高富帅，嫁不嫁

```javascript
//用变量 g ， f ， s 分别代表  身高 、 财富 、 颜值
//标准：高 g>=180, 富f>=100, 帅 s>=80
//用布尔值 true代表嫁，false代表不嫁

var g = 180;
var f = 100;
var s = 80;

//高&&富&&帅
console.log(g>=180 && f>=100 && s>=80); //true
//高 || 富 || 帅
console.log(g>=180 || f>=100 || s>=80); //true
//高&&富&&!帅
console.log(g>=180 && f>=100 && !(s==80)); //false
//(高||富)&&帅
console.log((g>=180 || f>=100) && s>=80); //true
```

### 5、三目运算

> 他能够根据不同的条件去做不同的处理
>
> 条件运算符 `? :`

解释一元、二元、三元运算的意思

-5 或 5 （就叫一元运算）

3+5 （就叫二元运算）

三元运算符： （比较表达式）？结果1：结果2；

```javascript
var num1 = 3; 
var num2 = 5;
//（比较表达式）？结果1：结果2；
var max = (num1>num2)?num1:num2;
console.log("最大值是"+ max);

var num1 = 3; 
var num2 = 5;
var num3 = 10;
var max = (num1>num2)?num1:num2;
max = (max>num3)?max:num3;
console.log("最大值是"+ max);
```

小结：

应用场景：当只有两个结果的时候

**语法**：条件？ 结果1：结果2 

## 逻辑

### 1、if逻辑

> if选择逻辑：基于不同的条件来执行不同的动作
>
> 程序运行的三大结构：顺序结构，选择结构，循环结构
>
> 1、顺序结构：代码逐行执行，自上而下
>
> 2、选择结构：通常是和关系比较一起用；
>
> ​	a) 单分支选择：if语句
>
> ​	b) 双分支选择：if-else语句
>
> ​	c) 多分支语句：if-else if-else 语句

```javascript
var num1 = 3;
var num2 = 5;
/*
如果（条件）{
    执行代码段
}否则{
    执行代码段
}
*/
if(num1<num2){
     console.log(num2);
}else{
     console.log(num1);
}
```

#### 单分支语句

```javascript
//多个值比较时，输出最大值
var num1 = 3;
var num2 = 5;
var num3 = 7;
var num4 0= 30;
//假定num1是最大的；
var max = num1;
if(max<num2){
  max = num2;
}
if(max<num3){
  max = num3;
}
if(max<num4){
  max = num4;
}
console.log("最大值是："+max);
```

#### 双分支If_else语句

```javascript
/*
嫁给谁？
条件：如果男票很帅，就嫁给他；

伪代码：
如果（男票很帅）{
  就嫁给他
}否则{
  在等等
}

*/
var bf = "不帅";
if(bf=="不帅"){
    console.log(" 就嫁给他") ;
  	console.log("给嫁妆");
}else{
    console.log("在等等");
}

//涛涛成绩：>=60 
var score = 60;
if(score >= 60){
	console.log("恭喜你，通过了考试");     
}else{
    console.log("不好意思，你挂科了");
}
```

#### 多分支if_else if语句

```javascript
//
if(条件1){
    //当条件1为true时执行的代码
}else if(条件2){
    //当条件2为true时执行的代码  
}else{
    //当以上条件都不为true时执行代码
}

var bf = "";
if(bf=="帅"){
    console.log("帅，就嫁给他");
}else if(bf=="有钱"){
	console.log("很有钱，也可以嫁给他");          
}else if(bf=="贴心"){
    console.log("很贴心，也可以嫁给他");          
}else{
    console.log("拜拜");
}
```

#### if的嵌套

> if里面嵌套if，或者if-else
>
> else 里面可以嵌套if ，或者if-else

```javascript
//判断用户名密码是否正确
var btn = document.getElementById("btn");
var user = document.getElementById("user");
var pass = document.getElementById("pass");

btn.onclick = function(){
  if(user.value == "涛涛"){
    if(pass.value == "123"){
      alert("登录成功");
    }else{
      alert("密码错误");
    }
  }else{
    alert("用户名错误");
  }
}
```

#### 配合逻辑运算符

> 问题：
>
> 1、如果他又帅又有钱，才嫁给他
>
> 2、如果他又帅又有钱，并且还是JS程序员，才嫁给他
>
> 3、他果他帅，或者他有钱，或者他是JS程序员，就嫁给他

```javascript
//1、如果他又帅又有钱，才嫁给他
var bf = "帅";
var money = "很多";
if(bf == "帅" && money == "很多"){
     console.log("才嫁给他");
}else{
     console.log("没符合条件哦!");
}
```

```javascript
//2、如果他又帅又有钱，并且还是JS程序员，才嫁给他
var bf = "帅";
var money = "很多";
var isJob = "js程序员";
if(bf == "帅" && money == "很多" &&  isJob == "js程序员"){
	 console.log("才嫁给他"); 
}else{
     console.log("没符合条件哦!");
}
```

```javascript
//他果他帅，或者他有钱，或者他是JS程序员，就嫁给他
var bf = "帅";
var money = "很多";
var isJob = "js程序员";
if(bf == "帅" ||  money == "很多" ||  isJob == "js程序员"){
	 console.log("才嫁给他"); 
}else{
     console.log("没符合条件哦!");
}
```

#### 布尔值为false 的几种情况

```javascript
/*
	0、 undefined 、 null 、 -0 、 NaN 、 ""空字符串 、false
*/
var num = 0;
if(num){
 	console.log(true);    
 }else{
    console.log(false);    
 }
```

```javascript
//需求：看涛涛的成绩评级：低于30差的没边，低于60挂科，大于等于60良，大于等于80优；
```

#### 小结：if-else语句 与 三目运算符

> if-else 能实现与三目元素符一样的效果，后者更简洁

```javascript
var a = 100;
var b = 100;
var c = 80;
if(a>=100 && b>=100 && c>=80){
	console.log("嫁");
}else{
    console.log("不嫁");
}
//三目运算符实现
console.log((a>=100 && b>=100 && c>=80)?"嫁":"不嫁");
```

但：两者的本质不同，前者叫语句，后者是运算符。这意味着三目运算可以与赋值运算符`=`组成算术表达式，而if-else不可以。



```javascript
/*
作业  1、给定一个用户的年龄，判断是哪个年龄段的人，并输出结果
儿童：<14;
青少年：14<=年龄<24;
青年:24<=年龄<40;
中年:40<=年龄<60;
老年：年龄>=60;

2、通过用户的积分判断是哪个级别的会员，并输出结果
普通：积分<100;
铜牌：100<=积分<300;
银牌：300<=积分<1000;
金牌：1000<=积分<2000;
vip：积分>=2000;

3、判断星期几 - //给定一个数字，（0-6） ，显示对应的星期几（0：星期日;1:星期1；.....6:星期6）
*/
```

### 2、选择逻辑  - switch

> switch语句是if ...else if ...else 语句的简写方式
>
> 使用前提：在匹配某个值相等不相等，而不是匹配某个范围的情况下，优先使用switch语句

#### 语法格式

```javascript
switch(num){  //表达式，变量
  case 1:
    	//执行代码段 1
    	break; //中断执行，跳出
    .....
  default：  //默认，其他都不是的情况下执行
   		//执行代码段 2
   		break;
}
//强调：break非常重要。
```

#### 改造判断星期几

```javascript
var num = 3;
if(num ==0){
  console.log("星期日");
}else if(num==1){
  console.log("星期一");
}else if(num==2){
  console.log("星期二");
}else if(num==3){
  console.log("星期三");
}else if(num==4){
  console.log("星期四");
}else if(num==5){
  console.log("星期五");
}else if(num==6){
  console.log("星期六");
}else{
  console.log("请输入0-6的数字哦！");
}

//改造后的
```

#### 会员价格

```javascript
/*
如果你是“普通会员”，结算享受95折；
       ”银牌会员“，结算享受90折；
       “金牌会员”，结算享受85折；
       ”钻石会员“，结算享受80折；
*/

var member = "钻石"; //定义会员级别
var money = 100; //定义应付金额
var discount; //折扣
var total;   //实付金额
switch(member){
  case "普通":
    discount = 0.95;
    break;
  case "银牌":
    discount = 0.9;
    break;
  case "金牌":
    discount = 0.85;
    break;
  case "钻石":
    discount = 0.8;
    break;
  default:
    money *=1;
    break;
}
total = money * discount; //实付金额 = 应付金额 * 折扣 
console.log("您应付金额为"+money+"; 您的实付金额" + total+ "；为您打了："+ discount + "折");
```

#### 给定年份，确定该月的天数

```javascript
/*
分析：
1,3,5,7,8,10,12   31天
4,6,9,11  30天
二月：29 ： 28 
*/
var year = 2017; //年份
var month = 12;  //月份
var year = 2017; //年份
var month = 20;  //月份
var days = 31;
var flag = true; //定义标志变量			
if(month<1 || month>12){
  flag = false;	
}

switch(month){
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

if(flag==true){
  console.log(year + "年" + month + "月的天数是：" + days);	
}else{
  console.log("您输入的月份不对");
}


//求闰年：对4取余 == 0 && 对100取余！=0 || 对400取余 等于 0
var year = 2016;
if(year%4==0 && year%100!=0 ||year%400==0 ){
  console.log(year+"是闰年");
}else{
  console.log(year+"是平年");
}
```

### 3、循环逻辑while ( while：当...的时候 )

> 循环可以帮助我们重复去做一些事情
>
> while循环的特点是：不知道具体循环执行的次数

#### 语法格式

```javascript
while(条件表达式){
	//要重复执行的代码段 - 循环体       
}
```

#### 循环100次歌曲

```javascript
//
var i = 0; //循环变量初始化
while(i<100){  //循环条件判定，循环100次
	console.log("hello" + i);  //执行循环体
  	i++;   //循环变量递增 | 递减 
}
```

#### 遍历数组

```javascript
//循环输出一个数组中的每一个元素，通常称为“数组遍历”
var arr=["张三","李四","王老五","涛涛"];
var i=0;
while(i<arr.length){
  console.log(arr[i]);
  i++;
}
```

#### 计算1-100所有偶数的和

```javascript
//求：1-100偶数的和：分析：1,2,3,4,5,6,7,8,9......100

```

### 小练习

```javascript
/*
1、编程输出所有满足下列条件的四位数，
	条件：个位数字加上百位数字  等于  千位数字加十位数字，且该四位数为奇数。
	分析：1、要处理的数据 1000-9999； 2、对这些数据要做哪些处理。
	四位整数： 

2、编程输出 1-1000之间的所有能够同时被3,5,7整除的整数，并要求每行显示6个这样的数（意思就是每行输出慢6个就换行）

3、过7的游戏
游戏规则：1,2,3，4,5,6,过,8，9,10,11,12,13,过......  100；
遇到7的倍数或者个位数上是7，或者十位数上是7，输出“过“；
*/
```

**扩展：数组星期应用**

```javascript
var weekDays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var num = prompt("请输入0-6");
console.log("今天是"+ weekDays[num]);
```

#### break 跳出循环

```javascript
var sum = 0;
var i = 1;
while(i<100){
  if(i%2==0){
    sum+=i;
  }
  if(sum>=1000){
    break; //停止循环，终止循环
  }
  i++;
}
console.log("最后一个偶数是："+i+"，累计到1000为止的和是= "+sum);
```

#### continue

```javascript
////把100-200之间的不能被3整除的数输出 - （能被3整除的数，不输出）
var i=100;
while(i<200){
  i++;
  if(i%3 == 0 ){
    continue; //结束本次循环，马上开始下一次循环
  }
  console.log(i);
}
```

### 4、循环逻辑do-while

> 与while语句99%相像，1%语法执行顺序不一样

#### 语法格式

```javascript
/*
规则：先执行一遍循环体，在判断循环条件，如果为true就再执行一遍循环体，为false就结束循环体。
*/
do{
    //循环体
}while(循环条件判断)
```

```javascript
//输出0-100所有能被3整除的数
var i= 0;
while(i<100){
    if(i%3==0){
    	console.log(i);     
    } 
  i++;
}

```

#### do-while与while区别

```javascript
var i=1;
/*while(i>10){
	console.log(i);
	i++;
}*/

do{
  console.log(i); //1
  i++;
}while(i>10);
```

>  特点：do-while是先执行循环体，在检测循环条件，`do-while`能保证循环体至少执行一次。而其他循环都无法保证循环体至少执行一次。

#### do-while 砸金蛋游戏

```javascript
/*
抽奖游戏，请用户输入一个幸运数字，输出对应的奖品，如果没有抽到，继续抽，抽到为止！
*/
var jiangpin = ["苹果x","小米","华为","ipad","谢谢参与"];
var n;
do{
  n = prompt("请输入您的幸运数字:0-4");
  console.log("您抽中的奖品是："+ jiangpin[n]);
}while(jiangpin[n]=="谢谢参与")
```

### 5、for循环

```javascript
//打印三遍
var i= 0;
while(i<3){
	console.log("重要的事说三遍");
  	i++;
}
 
//语法格式
//for( 1循环变量初始化；2循环条件判定；4循环变量的修改 ){
//   3循环体；
//}
```

#### for循环过程

> 1、循环变量初始化
>
> 2、循环条件判定
>
> 3、执行循环体
>
> 4、循环变量递增或递减

#### 循环的总结

> 循环可以帮助我们去重复的做一些事

1. while （当...的时候）

   > while 循环的特点：不知道具体循环执行的次数
   >
   > 只有......就....：只要蜗牛没到井口，就会一直爬
   >
   > 直到......才....： 直到蜗牛到井口，才停止；条件为true --》死循环 --break

   ```javascript
   var position = 0;
   //白天（天数）
   var daytime = 0;
   //晚上
   var night = 0;
   while(position<10){
   	daytime += 1;  //天数 +1
     	position += 3;
     	if(positon>=10){
       	break;     
       }
     night += 1;   //晚上的天数+1
     position -= 2; //晚上下滑-2
   }
   alert("蜗牛用了"+daytime+"天时间爬出了井口"); //8
   ```

2. for

   > 最常用的一种：计次循环，从0到100,100到0，遍历

   ```javascript
   var m = 1;
   var n = 10;
   for(var i=0;i<=n;i++){
       console.log("你们的学习态度太帅了");
   }
   for(var i=n;i>=m;i--){
       console.log("你们的学习态度太帅了");
   }
   ```

3. do-while

   > 与while九分相似，一分区别在do
   >
   > do.while先执行循环体，至少执行一次
   >
   > 而while先判断条件，再执行循环体。

   ```javascript
   //参加超级女声
   do{
       //唱一首歌，并评出分数
     var score = 80;
     console.log("本次参赛得分：" + score);
   }while(score>=60);  //如果得分大于60就参加下一轮比赛
   ```

   ​



练习：

```javascript
//一个数组，计算数组中2,3出现的次数？
var arr = [1,2,3,4,56,7,2,13,31,6,468,34,67,34,653,3,2,89,9,8,9,1,3,2,889,45];

/*
打印以下图形：
******
******
******
******
******
******

*
**
***
****
*****

     *
    **
   ***
  ****
 *****

*/

//扩展2、打印99乘法表
```

#### 生成随机数

```javascript
//生成随机数，包含的随机数都是小于1的，大于0的，都是小数
alert(Math.random());
//生成一个0.0 - 10.0的随机数
alert(Math.random() * 10);
//生成一个0-10的整数 随机数；
alert(Math.floor(Math.random()*10));
//生成一个0-10的 整数 随机数；向上取整，取最接近的
alert(Math.ceil(Math.random()*10));
```

## JS模块化

### 1、函数

> 函数是用来整合一段代码，已备后面重复使用
>
> 有时候，我们需要在不同位置使用相同的代码（重复使用）

#### 函数的定义

```javascript
//使用关键字function定义函数；函数名称的定义规则与变量名称规则相同
function chifan(){
    console.log("点餐");
    console.log("玩手机");
  	console.log("吃东西");
}
//调用函数
chifan();
chifan();

---------------------------------
  
//按钮点击调用函数
btn.onclick = chifan;

//重要的事说三遍
function say(){
   for(var i=0;i<3;i++){
       console.log("重要的事说三遍:");
   }
}
say();

---------------------------------
  
//通过变量声明函数，say调用必须出现在函数之后，否则会报错未定义
var say = function(){
	for(var i=0;i<3;i++){
       console.log("重要的事说三遍:");
   }
}
say();
```

小结：

* 函数的作用：模块化，复用；
* 函数也是一种数据类型（function）；
* 调用函数，就是把函数体中的代码从头到尾执行一遍。

#### 局部变量和全局变量

> 变量有两种作用范围：一个是在函数外，一个是在函数内

#### 变量的作用域

> 变量的作用域是指哪个范围内能访问到这个变量；
>
> 在函数体内申明的变量称为**局部变量**，仅在函数体内可以使用；
>
> 全局变量又称为外部变量，定义在函数体外，对全局可见。

#### 局部变量

```javascript
function home(){
    var wc = "我是家里的卫生间"; //局部变量
  	alert(wc);
}
home(); //调用
alert(wc);  //报错访问不到
```

#### 全局变量

> 在函数体内部，局部变量的优先级比同名的全局变量优先级高

```javascript
var wc = "我是全局变量";
function home(){
    var wc = "我是局部变量";
  	alert(wc);
}
home();

-----------------
var a = 3; //
```

#### 不var声明的变量

> 典型错误 不使用var申明的变量也是全局变量 （不建议这样用）

```javascript
function home(){
    wc = "我是私家厕所"; //全局变量
}
home();
alert(wc);
```

小结：

* 能使用局部变量就不要使用全局变量
* 【典型错误】不使用var声明的变量也是全局变量

#### 函数传参

> 目的为了来扩展函数的灵活性，可以将代码中可以变化的部分提取出来，用变量代替

```javascript
function hello(msg){
    console.log(msg);
}
hello("您吃了吗？");
```

```javascript
function say(count){
  for(var i=0;i<count;i++){
    console.log("重要的话 " + count +"遍");
  }
}
say(40); 
```

#### 打招呼

```javascript
function hello(name,msg){
  console.log(name,msg);
}
hello("张三","您吃了吗？");
hello("jeck","hello");
hello("某国人","阿里阿道");
```

> 一个函数可以有多个参数，调用函数是传参的个数和顺序要与函数的定义一致。

#### 做饭

```javascript
function cooking(zhu,tiao){
    console.log(zhu+"拌"+ tiao + "做好了！");
}

//不同的材料，产生不同的菜
cooking("小葱","豆腐")；
```

#### 小结

> 参数的含义：局部变量只能在函数内部赋值，如果我想在函数外部赋值，那么可以把这变量变成参数

* 函数定义中的参数是叫[ 形参 ] - 变量
* 函数调用中的参数是叫[ 实参 ] - 数据
* 函数的传参就是赋值操作
* 函数可以有参数也可以没有
* 如果定义了参数，在调用函数时没有传值，默认为undefined。

#### 数组传参计算和

```javascript
//写一个函数，向他传一个整数数组，该函数负责计算数组元素的和，并打印输出
```



#### 返回值

> 函数代表一种行为，返回值表示这个行为的结果

##### 1、return 的含义

```javascript
//理解返回值
function getNum(){
   return 2; //return,将函数的结果返回给当前函数名
}
var result = getNum(); //如果希望返回值保存，就放在变量中
console.log(result);  //2
```

> 如果函数中没有return，则他默认返回undefined

###### 2、retrun可以用来结束一个函数的运行

```javascript
function Fun(){
    console.log("hello");
  	return;
  	console.log("我会执行吗？");
}
```

如果在循环中使用return，不仅整个循环结束，而且 整个函数就结束了

```javascript
function Fun(){
  for(var i=0;i<10;i++){ //循环三次就return
    if(i==3){
      return;  
    }
    console.log("你们是帅哥");
  }
  alert("看return会不会执行我！");
}
Fun();
```

#### 小结：

> continue 结束本次循环
>
> break 结束整个循环
>
> return 结束整个函数





```javascript
//找出数组中偶数的和
//写个函数，向他传一个数组，找出数组中偶数的和，并打印输出。
//写一个函数，向它传一个整数数组，找出数组中偶数的和，并打印输出
var ages = [80, 65, 73, 72];
function sumEven(arr) {
  var sum = 0;  //遍历数组 - 找出偶数 - 累加 - 保存到sum中
  for (var i=0;i<arr.length;i++) {
    if (arr[i]%2 == 0) {  //如果arr[i]求余等于0，证明是个偶数
      sum = sum + arr[i];
    }
  }
  console.log(sum); //152
}
//调用
sumEven(ages);
```

