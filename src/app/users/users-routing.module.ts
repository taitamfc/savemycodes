import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { UsersComponent }         from './components/users.component';
import { UsersLoginComponent }    from './components/users-login.component';
import { UsersRegisterComponent } from './components/users-register.component';
import { UsersForgotComponent }   from './components/users-forgot.component';

import { AuthGuard } from './../_helpers/auth.guard';

const user_routes: Routes = [
  {
      //path: '', component: UsersComponent,
      path: 'users/login', component: UsersLoginComponent,
      children: [
          { path: 'login', component: UsersLoginComponent },
          { path: 'register', component: UsersRegisterComponent },
          { path: 'forgot', component: UsersForgotComponent },
      ]
  }
];

const routes: Routes = [
	{ path: ''	        , component: UsersComponent , canActivate: [AuthGuard] },	
	{ path: 'login'	    , component: UsersLoginComponent },	
	{ path: 'register'	, component: UsersRegisterComponent },	
	{ path: 'forgot'	  , component: UsersForgotComponent },	
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
