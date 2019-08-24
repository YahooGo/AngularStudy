import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {

  /**
   * 定义数据 通过public 或直接声明 声明时指定数据类型
   *
   * 声明属性的几种方式:
   * public 共有 类中可用，类外可用
   * protected 保护类型 只能在当前类和子类使用
   * private 私有类 只能在当前类中使用
   */

  public title = '这是一个title';
  msg = `这是一条新闻数据`;
  username = `张三`;
  // 推荐写法
  public student: any = `一个学生`;

  public message: any;

  public content = `<h1>11112</h1>`;

  // 推荐写法
  public list: string[] = [
    '1', '2', '3',
  ];
  public list2: Array<string> = [
    '1', '2', '3',
  ];

  // 获取DOM节点装饰器 ViewChild
  /**
   * 【注意】: {static: Boolean} 是Angular8新增，
   *  配置ViewChild / ContentChild查询的时间
   *  使用此功能时，必须提供静态标志以定义何时需要解析ViewChild和ContentChild实例。
   *  设置static: true将不允许您从动态模板分辨率（例如*ngIf）获得结果
   *  设置static: false将允许您从动态模板分辨率（例如*ngIf）获得结果
   *
   * 【功能使用】:
   *  - 功能1: 获取Dom节点 -
   *  1、模板中通过模板本地变量为模板起名字(引用),
   *  2、在业务逻辑内引入ViewChild,从Angular核心core中引入ViewChild;
   *  3、通过@ViewChild('模板名(引用)') 绑定变量名: ElementRef;
   *  4、ngAfterViewInit生命周期函数中获取Dom
   *  - 功能2: 获取组件的实例 -
   *  1、父组件中通过ViewChild调用子组件的方法
   *  2、给子组件定义一个名称 通过模板本地变量
   *  3、在业务逻辑内引入ViewChild,从Angular核心core中引入ViewChild;
   *  4、通过@ViewChild('模板名(引用)') 绑定变量名: any;
   *  5、【注意】: 此处引用子组件实例，调用方法是触发子组件当前环境数据this指向子组件
   */
  @ViewChild('myBox', { static: true }) myBox: ElementRef;

  @ViewChild('header', { static: true }) myHeader: HeaderComponent;
  /**
   * 通过直接注入子组件实例进行引用子组件方法。
   */
  @ViewChild(HeaderComponent, { static: true }) myHeader2: HeaderComponent;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // 赋值初始化数据
    this.message = `信息加载，这是初始化数据`;

    // 获取值、改变值，this指向当前类。

  }
  /**
   * 子组件创建完毕后调用函数，首次初始化
   */
  ngAfterViewInit() {
    console.log('Dom模板变量', this.myBox);
    this.myBox.nativeElement.style.width = `100px`;
    this.myBox.nativeElement.style.height = `100px`;
    this.myBox.nativeElement.style.background = `red`;
    this.myBox.nativeElement.innerHTML = `更改后的dom内容`;
  }

  btnClick(): void {
    // 调用子组件方法
    // this.myHeader.run();
    // 通过直接引用子组件实例调用实例方法
    this.myHeader2.run();
  }

  getData() {
    const url = `http://a.itying.com/api/productlist`;
    this.http.get(url)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        },
        () => {
          console.log('完成');
        }
      );
  }

}
