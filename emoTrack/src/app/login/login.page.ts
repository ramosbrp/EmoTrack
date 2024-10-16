import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password).then(() => {
      // Navegar para a home
    }).catch(error => {
      console.log(error);
    });
  }

  register() {
    this.authService.register(this.email, this.password).then(() => {
      // Registro com sucesso
    }).catch(error => {
      console.log(error);
    });
  }
}
