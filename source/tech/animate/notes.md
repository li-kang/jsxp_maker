---
categories:
    - gulp
title:
    gulp 教学讲义
---
# 第一章 命令行

* 最早的程序都是没有界面的，通过指令和参数和计算机交互。
* 常用的命令


```shell
cd
mkdir
rm
pwd
```




# 第二章 npm 包管理器

## 第一节 npm 介绍

* 安装 Node.js 时会同时安装一个 npm 软件。
* npm 是包管理工具，其作用类似 AppStore，通过他可以安装很多软件。
* npm 是一个命令行工具。




## 第二节 安装包

* 使用`-g`参数全局安装。

```Shell
npm install 要安装包的名称
npm install 要安装包的名称 -g
```



## 第三节 package.json 文件

### 1. 创建 package.json 文件

* 这步不是必需的

```SHELL
npm init
```

### 2. 安装依赖包

* 使用`--save`参数可以在安装包的同时，将配置信息自动添加到`package.json`的`dependencies`里。

```Shell
npm install 要安装包的名称 --save
```

### 3. 安装开发依赖包

*  有一些做项目管理或者测试用的工具只在开发期间使用，项目发布时并不需要，可以将其放在`package.json`的`devDependencies`里。
*  使用`--save-dev`参数可以在安装包的同时，将配置信息自动添加到`package.json`的`devDependencies`里。

```shell
npm install xxx --save-dev
```

### 4. 批量安装包

> 项目组的成员不会提交依赖包，但会提交 `package.json` 包信息。当你接手一个项目时，需要根据 `package.json`包信息自己安装依赖包。

* `npm install`如果不带参加，将批量安装`package.json`中`dependencies`和`devDependencies`中所有的包。

```shell
npm install
```

### 5. 更新包

* `npm update`批量更新`package.json`中`dependencies`和`devDependencies`中所有的包。

```shell
npm update
```

### 

# 第三章 gulp 介绍

## 第一节 gulp 的作用



## 第二节 安装 gulp

* gulp 是构建工具，所以只在开发时使用。

```shell
npm install gulp --save-dev
```



## 第三节 项目的常规目录结构

src

dist



# 第四章 gulp 中的命令和管道

* gulp 只有4个 API `task`、`src`、`dest`、`watch`。
* `src`、`dest`、`watch`通常都在 `task` 内使用
* 在项目根目录下创建一个名为 `gulpfile.js` 的文件，这是一个普通的javascript 文件。
* 通过 require 引入 gulp。

```js
var gulp = require('gulp');
```



## 第一节 `task`命令

* `task`命令用来创建任务

```js
var gulp = require('gulp');

// 创建一个叫 example 任务
// 当执行这个任务时，function 就会被调用。
gulp.task('example', function(){
  console.log("hello");
});
```

* 当执行这个任务时，function 就会被调用。

```shell
gulp exmaple
```



## 第二节 `src`命令

* `src`命令用来指定对哪些文件进行操作。
* 指定文件时可以使用 `glob` 正则表达式。


```js
var gulp = require('gulp');

gulp.task('build', function(){
  
});
```



## 第三节 `pipe`管道

* 用`src`命令指定好文件后，就可以使用`pipe`管道来一环一环的处理了。
* 一个文件流可以经过多个`pipe`管道。
* 每个`pipe`管道相当于一条流水线上的一个工人，每个工人都会对这个文件流做一些加工，比如编译、加版权信息、压缩、发布等。


```js
var gulp = require('gulp');

gulp.task('build', function() {
    gulp.src('src/css/**/*.less')
      .pipe()
      .pipe()
      .pipe()
});
```




## 第四节  `dest`命令

* `src`指定文件通过一个一个的 pipe 进行处理，最后通过 `dest` 将处理后的文件保存到指定位置。

```js
var gulp = require('gulp');

gulp.task('build', function() {
    gulp.src('src/css/**/*.less')
      .pipe(gulp.dest('dist/css/'))
});
```



## 第五节 `watch`命令

* `watch`命令用来指定具体监控哪些文件的变动。


```js
gulp.task('watch', function() {
  gulp.watch('**/*.less', ['build']);  //监听目录下的文件，若文件发生变化，则调用build任务。
});
```



# 第五章 gulp 常见任务及插件

* gulp 中有4个 函数，能做的事非常有限，他只提供了一个平台，具体的每一个功能由一个插件提供。
* 使用插件一般可以分为以下步骤：


1. 安装插件包。`npm install gulp-less --save-dev`
2. 引入插件。`var less = require("gulp-less");`
3. 在task任务或者pipe管道中 调用插件函数。`less()`




## 第一节 编译

### 1. gulp-less（编译Less）

* 把less文件转换为css。

```
var gulp = require('gulp'),
    less = require("gulp-less");

gulp.task('compile-less', function () {
    gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});
```

### 2. gulp-sass（编译Sass）

* 把scss文件转换为sass文件。

```
var gulp = require('gulp'),
    sass = require("gulp-sass");

gulp.task('compile-sass', function () {
    gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});
```

### 3. gulp-babel

* 将ES6代码编译成ES5。

```
var babel = require('gulp-babel');

gulp.src('./js/index.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'))
```



### 4. gulp-autoprefixer

* 增加浏览器的私有前缀。

```js
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: true, //是否美化属性值 默认：true
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('dist/css'));
});
```



## 第二节 自动注入

### 1. header



### 2. gulp-useref

* 合并文件。

```
// index.html

<!-- build:css /css/all.css -->
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main.css">
<!-- endbuild -->

// gulpfile.js

var useref = require('gulp-useref');

gulp.src('index.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist'))
    
```

替换之后的index.html中就会变成：

```
<link rel="stylesheet" href="css/all.css">  // 之前的两个<link>替换成一个了
```



## 第三节 压缩

### 1. gulp-uglify

* javascript代码优化工具，可以解析，压缩和美化javascript。

```
var uglify = require("gulp-uglify");

gulp.src('./hello.js')
    .pipe(uglify())                 // 直接压缩hello.js
    .pipe(gulp.dest('./dist'))
    
 gulp.src('./hello.js')
    .pipe(uglify({
        mangle: true,               // 是否修改变量名，默认为 true
        compress: true,             // 是否完全压缩，默认为 true
        preserveComments: 'all'     // 保留所有注释
    }))
    .pipe(gulp.dest('./dist'))
    
```

### 2. gulp-minify-css

* 压缩css文件。

```
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

gulp.task('compress-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/'));
});
```

### 3. gulp-minify-html

* 压缩html文件。

```
var gulp = require('gulp');
var htmlmini = require('gulp-minify-html');

gulp.task('htmlmini', function () {
    gulp.src('*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest('minihtml'));
})
```

### 4. gulp-imagemin

* 压缩图片。

```
var imagemin = require('gulp-imagemin');

gulp.src('./img/*.{jpg,png,gif,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
```

### 5. gulp-zip

* 压缩成ZIP文件。

```
var zip = require('gulp-zip');

gulp.src('./src/*')
    .pipe(zip('all.zip'))                   // 压缩成all.zip文件
    .pipe(gulp.dest('./dist'))
```



## 第四节 文件操作

### 1. del

* 删除文件。

```js
var del = require('del');

del('./dist');                      // 删除整个dist文件夹
```

### 2. gulp-rename

* 重命名文件。

```js
var rename = require("gulp-rename");

gulp.src('./hello.txt')
  .pipe(rename('gb/goodbye.md'))    // 直接修改文件名和路径
  .pipe(gulp.dest('./dist')); 
 
gulp.src('./hello.txt')
  .pipe(rename({
    dirname: "text",                // 路径名
    basename: "goodbye",            // 主文件名
    prefix: "pre-",                 // 前缀
    suffix: "-min",                 // 后缀
    extname: ".html"                // 扩展名
  }))
  .pipe(gulp.dest('./dist'));
  
```

### 3. gulp-concat

* 合并文件。

```js
var concat = require('gulp-concat');

gulp.src('./js/*.js')
    .pipe(concat('all.js'))         // 合并all.js文件
    .pipe(gulp.dest('./dist'));
    
gulp.src(['./js/demo1.js','./js/demo2.js','./js/demo2.js'])
    .pipe(concat('all.js'))         // 按照[]里的顺序合并文件
    .pipe(gulp.dest('./dist'));
    
```

### 4. gulp-filter

描述：在虚拟文件流中过滤文件。

```js
var filter = require('gulp-filter');

const f = filter(['**', '!*/index.js']);
gulp.src('js/**/*.js')
    .pipe(f)                        // 过滤掉index.js这个文件
    .pipe(gulp.dest('dist'));

const f1 = filter(['**', '!*/index.js'], {restore: true});
gulp.src('js/**/*.js')
    .pipe(f1)                       // 过滤掉index.js这个文件
    .pipe(uglify())                 // 对其他文件进行压缩
    .pipe(f1.restore)               // 返回到未过滤执行的所有文件
    .pipe(gulp.dest('dist'));       // 再对所有文件操作，包括index.js
    
```



## 第五节 工具

### 1. gulp-load-plugins

### 2. browser-sync 

* 用来创建一个开发用的 Web 服务器。
* 配合 `gulp.watch` 可以实现自动刷新。
* 安装

```shell
npm install browser-sync --save-dev
```

* 使用

```js
gulp.task('serve', ['styles'], function() {

  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/**/*.scss", ['styles']);
  gulp.watch("src/**/*.html").on('change', browserSync.reload);
});

```

### 3. gulp-jshint





## 案例：less 文件的自动化处理

按以下步骤实现：

1. 编译 less。
2. 加私有前缀。
3. 压缩 CSS。
4. 重命名，加上.min 后缀。
5. 同时保存一份压缩版和一份未压缩版。



```js
// less 文件的自动化处理
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clear', function() {
    del('./dist');
});

gulp.task('build:src', function() {
    gulp.src('src/css/**/*.less') // glob
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist/css/'))
      .pipe(minifyCSS())
      .pipe(rename({suffix:'.min'}))
      .pipe(gulp.dest('dist/css/'))
});

gulp.task('watch', function() {
    gulp.watch('**/*.less', ['build:src']);
});

gulp.task('default', ['clear', 'build:src']);
```



# 第六章 gulp命令详解

## 第一节 task 参数

### 1.default任务

* 如果任务名是 default，就可以省略 gulp 调用时的任务名。

```shell
# 执行 build 任务
gulp build

# 执行 default 任务
gulp
```



### 2. 前置任务

* task 有一个前置任务参数，

```js
# 当 gulp build:clear 时先顺序执行 clear 和 build 再执行 default 中的 function。
gulp.task('build:clear', ['clear', 'build'], function(){
    
});

# 当 gulp build:clear 时先顺序执行 clear 和 build 
gulp.task('build:clear', ['clear', 'build']);
```



## 第二节 glob

### 1. 匹配符

- *、**、！、{}

```js
gulp.src('./js/*.js')               // * 匹配js文件夹下所有.js格式的文件
gulp.src('./js/**/*.js')            // ** 匹配js文件夹的0个或多个子文件夹
gulp.src(['./js/*.js','!./js/index.js'])    // ! 匹配除了index.js之外的所有js文件
gulp.src('./js/**/{omui,common}.js')        // {} 匹配{}里的文件名
```

