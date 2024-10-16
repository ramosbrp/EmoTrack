import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-mais',
  templateUrl: 'mais.page.html',
  styleUrls: ['mais.page.scss']
})
export class MaisPage {

  constructor() { }


  ngOnInit() {
  }

  getImageUrl(imageName: string): string {
    console.log(`${window.location.origin}/assets/imagens/${imageName}`)
    return `${window.location.origin}/assets/imagens/${imageName}`;
  }


}
