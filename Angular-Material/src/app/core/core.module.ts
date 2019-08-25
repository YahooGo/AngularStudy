import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * [核心模块]用于加载一次性资源，不重复加载
 * 全局组件，UI组件库资源等
 */

// 引入Material组件module
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

// 引入共享模块
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';


/**
 * @SkipSelf()装饰器
 * 用于构造函数参数的参数修饰符，
 * 它告诉DI框架从父注入器开始依赖项解析。
 * 解析在注入器层次结构中向上工作，
 * 因此不会为提供程序检查本地注入器。
 */
/**
 * @Optional() 装饰器
 * 用于构造函数参数的参数修饰符，
 * 它将参数标记为可选依赖项。
 * 如果没有找到依赖项，
 * DI框架将提供不注入。
 */

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
  ],
  exports: [
    MatSidenavModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ]
})
/**
 * angular 依赖注入核心概念不明确 TODO: 暂时未知
 */
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('核心模块已经存在，不能再次加载！');
    }
  }
}
