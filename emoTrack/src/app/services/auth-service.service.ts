import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  //aqui
import { Router } from '@angular/router';  //aqui

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  async login(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['notificacoes']);
    }catch(error){
      this.router.navigate(['']);
    }
  }

  logout(){
    this.auth.signOut();
  }
}
