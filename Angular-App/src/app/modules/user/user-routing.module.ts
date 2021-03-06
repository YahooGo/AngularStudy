import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * 引入根组件
 */
import { UserComponent } from './user.component';
import { AddressComponent } from './components/address/address.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: UserComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'address', component: AddressComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
