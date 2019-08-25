# AngularMaterial

## 本项目为学习项目
> 环境搭建
0. Node:v10.15.0,npm:6.4.1
1. 初始化项目： ng new Angular-Material --skip-install //不安装node_modules初始化项目
2. 通过yarn安装node_modules依赖


> 使用技术
Angular8 + Material UI + 动画 + Angular核心概念 + Rxjs响应式编程
+ angular 中的响应式编程 + Redux + 自动化测试

> 具体内容


> 编译
`ng build --prod` 生产环境编译 进行代码aot调整
`ng build` 开发环境编译
`ng build --test` 测试环境编译

## 项目架构

> 根模块
> 核心模块
>> 服务模块
>> Reducer模块
>> effacts模块
> 共享模块
> 登录模块
> 项目模块 [懒加载模块]
> 任务模块 [懒加载模块]
> 日历模块 [懒加载模块]

> 文件组织约定
- 目录结构按功能独立划分
- src/app 下第一层子目录中除了模块，还有领域对象，动画，工具文件夹
- 资源存放在src、assets目录下

> 命名约定
- 模块和组件的类文件都是用index.ts命名约定


## mock 数据
> 使用json-server 工具

安装： 安装指令`yarn add json-server`
创建： 创建db.json文件用于定义mock数据
配置： 配置package.json 命令内部启动json-server 
运行： 运行指令`json-server --watch db.json`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


