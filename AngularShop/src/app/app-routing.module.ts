import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';

/**
 * 配置路由：根据不同URL动态挂载组件
 * 1. 引入组件
 * 2. 配置地址url 和映射组件
 * 3. 此时路由创建完毕在router-outline查看组件
 */
// const routes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent,
//   },
//   /**
//    * 动态路由
//    */
//   {
//     path: 'news/:aid',
//     component: NewsComponent,
//   },
//   {
//     path: 'form',
//     component: FormComponent,
//   },
//   // 匹配不到的路由，全部由** 接管，调转其他路由
//   {
//     path: '**',
//     redirectTo: 'home'
//   }
// ];

/**
 * 嵌套路由
 */

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'welcome', component: NewsComponent },
      /**
       * 默认路由跳转不到跳转指定路由
       */
      { path: '**', redirectTo: 'welcome' }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
