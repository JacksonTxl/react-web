This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 前端react框架

为管理平台搭建前端应用框架，本框架使用react，样式框架采用choerodon-ui

### 项目使用
快速本地运行项目

`git clone git@github.com:JacksonTxl/react-web.git`

<br />

`cd react-web`

<br />

`npm i`

<br />

`npm start`

<br />

访问[http://localhost:3000/](http://localhost:3000/)

### 项目结构说明

* assets 中css存放模块通用样式表，images存放图片资源
* containers 存放前端的页面
* stores 存放前端状态管理文件
* common 存放公共的配置文件
* components 存放的是公共的组件
* local 存放模块多语言文件
* config 存放Menu.yml配置文件(包括菜单的code， icon， 跳转Route，菜单的权限)和language中的中英文yml(zh.yml， en.yml)
* test 存放测试文件