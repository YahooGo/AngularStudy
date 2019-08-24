import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { OrderComponent } from './components/order/order.component';
import { AddressComponent } from './components/address/address.component';
import { UserComponent } from './user.component';

/**
 * 引入服务
 */
import { UserserveService } from '../user/services/userserve.service';

@NgModule({
  /**
   * user 模块组件
   */
  declarations: [
    ProfilesComponent,
    OrderComponent,
    AddressComponent,
    UserComponent],
  /**
   * 引入模块
   */
  imports: [
    CommonModule,
  ],
  /**
   * 服务提供商
   */
  providers: [UserserveService],
  /**
   * 暴露组件
   */
  exports: [
    UserComponent
  ]
})
export class UserModule { }
