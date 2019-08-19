import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

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
    username: string = `张三`;
    // 推荐写法
    public student: any = `一个学生`;

    public message: any;

    public content: string = `<h1>11112</h1>`;

    // 推荐写法
    public list: string[] = [
      '1', '2', '3',
    ];
    public list2: Array<string> = [
      '1', '2', '3',
    ];
  constructor() { }

  ngOnInit() {
    // 赋值初始化数据
    this.message = `信息加载，这是初始化数据`;

    // 获取值、改变值，this指向当前类。


  }

}
