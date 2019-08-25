import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidebartoggle: EventEmitter<void> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public sidenavToggle(): void {
    this.sidebartoggle.emit();
  }
}
