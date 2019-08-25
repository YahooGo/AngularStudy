import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入Material依赖于组件
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * 共享模块
 * [主要作用]: 导入和导出模块组件服务等
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule { }
