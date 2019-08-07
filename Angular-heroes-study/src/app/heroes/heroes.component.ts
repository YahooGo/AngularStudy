import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';


// 装饰器
@Component({
  selector: 'app-heroes', // 组建选择器 - 识别组建 - 自定义组件标签
  templateUrl: './heroes.component.html', // 组件模板
  styleUrls: ['./heroes.component.scss'] // 组建样式
})
// 组件类
export class HeroesComponent implements OnInit {

  // 声明变量
  hero: Hero = {
    id: 1,
    name: `超级英雄`
  };

  username = `我是超级英雄`;

  constructor() { }

  ngOnInit() {
  }

}
