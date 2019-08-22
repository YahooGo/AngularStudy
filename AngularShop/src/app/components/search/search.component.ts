import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from '../../services/storage.service';

/**
 * 关于服务使用：
 * 1 ng g s services/storage
 * 2 app.module.ts 里面引入创建的服务，并且声明
 * import {storageService} from './service/storage.service'
 * providers: [StorageService],
 * 在用到的组件内引入服务
 * 构造函数中依赖注入服务实例
 */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public pageControl: any = {
    searchText: '',
    historyLists: [],
  };

  constructor(
    private storage: StorageService
  ) {
    this.storage.get('search-page');
  }

  ngOnInit() {
    console.log('刷新触发');
    // 读取缓存
    const s = this.storage.get('searchList');
    if (s) {
      this.pageControl.historyLists = s;
    }

  }

  search(event): void {
    // console.log(event);
    if (event.keyCode === 13 && event.key === `Enter`) {
      console.log('search:', this.pageControl.searchText);
      if (this.pageControl.historyLists.indexOf(this.pageControl.searchText) === -1) {
        // this.pageControl.historyLists.push(this.pageControl.searchText);
        this.pageControl.historyLists.push({
          title: this.pageControl.searchText,
          status: 0,
        });

        this.storage.set('search-page', this.pageControl.historyLists);


      }
    }
  }

}
