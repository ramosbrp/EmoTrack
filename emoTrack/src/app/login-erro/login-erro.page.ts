import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-erro',
  templateUrl: './login-erro.page.html',
  styleUrls: ['./login-erro.page.scss'],
})
export class LoginErroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tryAgain() {
    this.router.navigate(['login'])
  }

  goBack() {
    this.router.navigate(['login']);
  }
}
