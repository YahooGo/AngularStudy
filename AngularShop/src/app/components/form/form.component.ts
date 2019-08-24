import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public peopleInfo: any = {
    username: '',
    sex: '1',
    citys: ['北京', '上海', '大连'],
    city: '上海',
    hobby: [
      {
        title: '吃饭',
        checked: true
      },
      {
        title: '睡觉',
        checked: true
      },
      {
        title: '电脑',
        checked: false
      }
    ]
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleSearch() {
    console.log(this.peopleInfo.username);
  }

  goHome() {
    // 普通路由
    this.router.navigate(['/news/']);
    // home 动态路由跳转
    this.router.navigate(['/news/', '123']);
    // get路由跳转
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: `123`, fragment: 'author' },

    };
    this.router.navigate(['/home/'], navigationExtras);
  }

}
