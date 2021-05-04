import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { UsersComponent }         from './components/users.component';
import { UsersLoginComponent }    from './components/users-login.component';
import { UsersRegisterComponent } from './components/users-register.component';
import { UsersForgotComponent }   from './components/users-forgot.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UsersLoginComponent },
  { path: 'register', component: UsersRegisterComponent },
  { path: 'forgot', component: UsersForgotComponent },
];

const users_routes: Routes = [
  { path: '', redirectTo: 'users/login', pathMatch: 'full' },
  {
    path: 'users/',
    component: UsersComponent,
    children: [
      {
        path: 'login',
        component: UsersLoginComponent,
      },
      {
        path: 'register',
        component: UsersRegisterComponent,
      },
      {
        path: 'forgot',
        component: UsersForgotComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
