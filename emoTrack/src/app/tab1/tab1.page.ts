import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}


  userMood: number = 5; // Valor inicial do humor
  
  onMoodChange(event: any) {
    console.log('Mood changed to: ', event.detail.value);
  }

}
