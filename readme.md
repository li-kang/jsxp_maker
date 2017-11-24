名称：火星时代-技术学派
网址：www.JiShuXuePai.com
技术、干货、教程、课程笔记

# 环境搭建

0. 浏览项目：https://github.com/li-kang/jsxp_maker/tree/master
1. 从 github 获取项目：git clone https://github.com/li-kang/jsxp_maker.git
2. 安装依赖：cnpm install
3. 安装 hexo 命令行： cnpm install -g hexo-cli
4. 启动项目: hexo serve
5. 在浏览器中查看：http://localhost:4000

# 目录结构
## 推荐目录结构

* 每门技术有一个独立的目录，相互不影响。
* 案例有公用的 js、css、images 等。
* 每个案例有私有的 js、css、images 等。

```
+ tech
  + HMTL
    + case
      + js
      + css
      + images
      + [case1]
      + [case2]
        - js
        - css
        - images
        - snapshot.png
      ....
    - notes.md
    - case.md
    - knowlage.md
    - relative.md
```

## 特定的文件

* 教学讲义 notes.md
* 案例 case.md 与 case 目录
* 知识点列表 knowlage.md
* 相关资料 relative.md

## 支持的内容文件类型

* markdown
* html
* 模版（ejs 等）

## CSS

* css 选择器 不要影响整体样式
* 可以使用 sass、less、stylus

# 文章参数

* 设置标题
* 设置文章 category 
* 作者

## JSON Front-matter



# 发布


# 首次添加内容

* 设置github帐户。
* 为课程添加一个文件夹，命名为对应课程的 ID。
* 添加notes、 case、 knowlage、 relative 页面。
* 预览。
* 发布。