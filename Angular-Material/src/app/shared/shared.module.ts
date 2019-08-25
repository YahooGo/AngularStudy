import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入form模块
import { FormsModule } from '@angular/forms';
// 引入Material依赖于组件
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * 共享模块
 * [主要作用]: 导入和导出模块组件服务等
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
  ]
})
export class SharedModule { }
