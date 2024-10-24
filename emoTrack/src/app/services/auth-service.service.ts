import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signInWithRedirect, createUserWithEmailAndPassword, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth: Auth,
    private router: Router) { }

  async register(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password)
      this.router.navigate(['tabs']);
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

    try {
      await signInWithRedirect(this.auth, provider);
      this.router.navigate(['tabs']);
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  }
}
