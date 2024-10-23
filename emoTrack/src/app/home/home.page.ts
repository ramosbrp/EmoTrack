import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { getRedirectResult } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private dataService: DataService, private auth: Auth, private router: Router) { }

  ngOnInit() {
    getRedirectResult(this.auth).then(result => {
      if (result?.user) {
        this.router.navigate(['home']);  // Redireciona para home após login bem-sucedido
      }
    }).catch(error => {
      console.error('Erro ao obter resultado do redirecionamento:', error);
    });
  }

  userMood: number = 5; // Valor inicial do humor
  gratitude: string = '';
  intentions: string = '';
  importantTasks: string = '';
  
  onMoodChange(event: any) {
    this.userMood = event.target.value;
    console.log('Mood changed to: ', this.userMood);
  }

  enviarDados() {
    const moodData = {
      mood: this.userMood,
      gratitude: this.gratitude,
      intentions: this.intentions,
      importantTasks: this.importantTasks,
      timestamp: new Date(),
    };

    this.dataService.addUserMood(moodData).then(() => {
      alert('Dados enviados com sucesso!');
    }).catch((error) => {
      console.error('Erro ao enviar dados: ', error);
    });
  }

}
