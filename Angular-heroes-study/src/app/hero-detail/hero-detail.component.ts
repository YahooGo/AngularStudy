import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../interfaces/hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  // @Input 修饰符用于接收组件传入的属性数据 =》【】属性绑定
  // 这是一种单向数据绑定

  constructor() { }

  ngOnInit() {
  }

}
