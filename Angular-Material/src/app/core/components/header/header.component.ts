import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidebartoggle: EventEmitter<void> = new EventEmitter();
  @Output() changeTheme: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public sidenavToggle(): void {
    this.sidebartoggle.emit();
  }

  public handleChangeTheme(checkDark: boolean) {
    console.log(checkDark);
    this.changeTheme.emit(checkDark);
  }
}
