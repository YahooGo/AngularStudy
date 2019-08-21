import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  search(event): void {
    // console.log(event);
    if (event.keyCode === 13 && event.key === `Enter`) {
      console.log('search:', this.pageControl.searchText);
      if (this.pageControl.historyLists.indexOf(this.pageControl.searchText) === -1) {
        this.pageControl.historyLists.push(this.pageControl.searchText);
      }
    }

  }

}
