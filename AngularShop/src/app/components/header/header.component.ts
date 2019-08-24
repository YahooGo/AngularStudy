import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public count = 0;
  constructor() { }

  ngOnInit() {
  }

  run(): void {
    this.count++;
    console.log('我是子组件run方法');
  }
}
