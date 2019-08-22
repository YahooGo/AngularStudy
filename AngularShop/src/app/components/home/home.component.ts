import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = `初始title`;

  public keyWords: string = null;

  public imgUrl: string = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566317354181&di=71b9b2babb64908d12dcdcceee7aedec&imgtype=0&src=http%3A%2F%2Fimg.popo.cn%2Fuploadfile%2Flive%2F2014%2F1009%2F79801412838589.jpg`

  public lists: any = [
    {
      title: '新闻1'
    },
    {
      title: '新闻2'
    },
    {
      title: '新闻3'
    }
  ];
  public flag: boolean = true;
  /*
   * 1: 已经支付
   * 2：支付且确认订单
   * 3：表示发货
   * 4：已经收货
   * */

  public orderStatus: number = 1;
  public today: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  run() {
    console.log('执行方法');
  }

  getData() {
    this.title = `改变title`;
  }

  setData() {
    this.title = '设置title';
  }
  keyDown(data) {
    console.log('keyDown', data);
  }

  setkeyWords() {
    this.keyWords = `asdasds`;
  }
}
