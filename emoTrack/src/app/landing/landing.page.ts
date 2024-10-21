import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  //aqui

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }

  navigateToRegister(){
    this.router.navigate(['pre-cadastro'])

  }
}
