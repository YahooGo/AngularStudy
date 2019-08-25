import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidebartoggle: boolean;
  @Output() sidebartoggleChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public sidenavToggle(): void {
    this.sidebartoggle = !this.sidebartoggle;
    this.sidebartoggleChange.emit(this.sidebartoggle);
  }
}
