import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../service/hero.service';

// 装饰器
@Component({
  selector: 'app-heroes', // 组建选择器 - 识别组建 - 自定义组件标签
  templateUrl: './heroes.component.html', // 组件模板
  styleUrls: ['./heroes.component.scss'] // 组建样式
})
// 组件类
export class HeroesComponent implements OnInit {

  // 声明变量

  heroes: Hero[];
  
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    // console.log('模拟的数据', this.heroes);
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
