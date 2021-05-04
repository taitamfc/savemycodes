import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-login',
  templateUrl: './../templates/users-login.component.html',
})
export class UsersLoginComponent implements OnInit {
  submitted = false;
  user = {
    'username' : '',
    'password' : ''
  };
  constructor() {

  }

  ngOnInit(): void {
    console.log('LoginComponent');
  }

  onSubmit() { 
    this.submitted = true;
    console.log('LoginComponent Submitted'); 
    console.log( this.user );
  }

  postLogin(){
    console.log( this.user );
  }
}
