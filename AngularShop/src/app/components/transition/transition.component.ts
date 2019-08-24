import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  showOrHideAside(): void {

    const asideDom: any = document.getElementById('aside');
    console.log('asideDom', asideDom.style.transform);
    if (asideDom.style.transform !== `translate(0px, 0px)`) {
      asideDom.style.transform = 'translate(0px,0px)';
    } else {
      asideDom.style.transform = 'translate(100%, 0px)';
    }
  }
}
