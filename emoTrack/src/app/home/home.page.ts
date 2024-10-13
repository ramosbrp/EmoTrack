import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor() {}


  userMood: number = 5; // Valor inicial do humor
  
  onMoodChange(event: any) {
  this.userMood = event.target.value;
    console.log('Mood changed to: ', this.userMood);
  }

}
