import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    this.auth.register(this.email, this.password, this.fullName).then(() => {
      alert("Usuário cadastrado com sucesso.");
      this.router.navigate(['tabs']);
    }).catch(error => {
      console.log(error);
    });
  }

  goBack() {
    this.router.navigate(['pre-cadastro']);
  }

}
