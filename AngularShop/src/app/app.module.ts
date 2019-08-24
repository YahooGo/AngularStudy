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
/**
 *  form 模块
 */
import { FormsModule } from '@angular/forms';
/**
 * 引入http服务模块
 */
import { HttpClientModule } from '@angular/common/http';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';

/**
 * 引入并且声明服务
 */
import { StorageService } from './services/storage.service';
import { HeaderComponent } from './components/header/header.component';
import { TransitionComponent } from './components/transition/transition.component';

/**
 * @ngModule装饰器 接受一个元数据，告诉angular如何启动应用
 */
@NgModule({
  declarations: [ /* 配置当前项目运行的组件 */
    AppComponent, NewsComponent, HomeComponent, FormComponent, SearchComponent, HeaderComponent, TransitionComponent
  ],
  imports: [ /* 配置当前模块依赖其他模块 */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StorageService,
  ], /* 配置项目依赖服务 */
  bootstrap: [AppComponent] /* 指定应用的主视图，通过引导根AppModule来启动应用 */
})
// 根模块不需要导出任何东西， 因为其它组件不需要导入根组件
export class AppModule { }
