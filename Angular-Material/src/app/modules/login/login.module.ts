import { NgModule } from '@angular/core';
// 引入共享模块
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }
