/**
 * 这个文件是Angular根模块，告诉Angular如何组装应用
 */
/**
 * BrowserModule 浏览器解析模块
 */
import { BrowserModule } from '@angular/platform-browser';
/**
 * Angular 核心模块
 */
import { NgModule } from '@angular/core';
// 路由module
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
/**
 * @ngModule装饰器 接受一个元数据，告诉angular如何启动应用
 */
@NgModule({
  declarations: [ /* 配置当前项目运行的组件 */
    AppComponent
  ],
  imports: [ /* 配置当前模块依赖其他模块 */ 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], /* 配置项目依赖服务 */
  bootstrap: [AppComponent] /* 指定应用的主视图，通过引导根AppModule来启动应用 */
})
// 根模块不需要导出任何东西， 因为其它组件不需要导入根组件
export class AppModule { }
