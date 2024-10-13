import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }


  ngOnInit() {
  }

   getImageUrl(imageName: string): string {
    console.log(`${window.location.origin}/assets/images/${imageName}`)
    return `${window.location.origin}/src/app/assets/images/${imageName}`;
  }


}
