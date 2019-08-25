import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * [共享模块] 用于加载共享资源，多个组件公用
 * 服务，依赖，等
 */

// 引入form模块
import { FormsModule } from '@angular/forms';
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
    FormsModule,

  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ]
})
export class SharedModule { }
