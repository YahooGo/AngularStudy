import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public count = 0;
  constructor() { }
  // 设置别名引入
  @Input('msg') msg2: string;
  // 正常引入
  @Input() title: string;
  // 接收父组件方法
  @Input('run') runParent: any;

  // @Output()发出数据
  @Output() private backdata = new EventEmitter();

  // public title: string = '首页组件标题';

  ngOnInit() {
  }

  run(): void {
    this.count++;
    console.log('我是子组件run方法');
  }

  getParentRun() {
    // 执行父组件run方法
    this.runParent();
  }

  backDataToParent() {
    this.backdata.emit('这是子组件数据通过@Output()发出');
  }

}
