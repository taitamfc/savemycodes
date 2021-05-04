import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule }     from './users-routing.module';
import { UserService }            from './services/user.service';

import { UsersComponent }         from './components/users.component';
import { UsersLoginComponent }    from './components/users-login.component';
import { UsersRegisterComponent } from './components/users-register.component';
import { UsersForgotComponent }   from './components/users-forgot.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersLoginComponent,
    UsersRegisterComponent,
    UsersForgotComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
