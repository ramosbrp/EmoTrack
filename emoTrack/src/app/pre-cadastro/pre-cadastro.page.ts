import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.page.html',
  styleUrls: ['./pre-cadastro.page.scss'],
})
export class PreCadastroPage implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  navigateToEmailSignup(){
    this.router.navigate(['cadastro']);
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle();
  }

  goBack() {
    this.router.navigate(['landing']);
  }
}
