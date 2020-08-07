import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;

  signUp_page = false;
  login_page = true;

  constructor() { }

  ngOnInit(): void {
  }

  signup() {
    this.signUp_page = true;
    this.login_page=false;
  }
  login(){
    this.signUp_page=false;
    this.login_page=true;
  }
}
