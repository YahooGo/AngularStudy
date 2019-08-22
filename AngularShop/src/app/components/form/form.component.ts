import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleSearch() {
    console.log(this.peopleInfo.username);
  }

}
