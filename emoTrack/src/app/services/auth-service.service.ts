import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  //aqui
import { Router } from '@angular/router';  //aqui
import { Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) { }

  async register(email: string, password: string){
    await this.auth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['home']);
    } catch (error) {
      this.router.navigate(['login-erro']);
    }
  }

  logout() {
    this.auth.signOut();
  }

  // Login com Google
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }
}
