import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { UsersLoginComponent } from './components/users-login.component';
import { UsersRegisterComponent } from './components/users-register.component';
import { UsersForgotComponent } from './components/users-forgot.component';

@NgModule({
  declarations: [
    UsersLoginComponent,
    UsersRegisterComponent,
    UsersForgotComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
