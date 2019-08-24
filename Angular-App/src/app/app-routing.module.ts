import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'user', loadChildren: './modules/user/user.module#UserModule',
  },
  {
    path: 'product', loadChildren: './modules/product/product.module#ProductModule',
  },
  {
    path: 'article', loadChildren: './modules/article/article.module#ArticleModule',
  },
  {
    path: '**', redirectTo: 'user',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
