import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * [共享模块] 用于加载共享资源，多个组件公用
 * 服务，依赖，等
 */

// 引入form模块
import { FormsModule } from '@angular/forms';


// 引入Material组件module
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

/**
 * 共享模块
 * [主要作用]: 导入和导出模块组件服务等
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
  ]
})
export class SharedModule { }
