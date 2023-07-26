import { Component } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.scss']
})
export class ComponentTestComponent {

  nomeSite: string;

  usedLangs: string[] = ["Typescript", "Angular", "HTML", "SCSS"]

  constructor(){
    
    this.nomeSite = "Angular Learning!"

  }

}
