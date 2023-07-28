import { Component } from '@angular/core';
import { ComponentTestService } from './component-test.service';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.scss']
})
export class ComponentTestComponent {

  nomeSite: string;

  usedLangs: string[];

  constructor(private componentTestServ: ComponentTestService){
    
    this.nomeSite = "Angular Learning!"

    this.usedLangs = componentTestServ.getCursos();

  }

}
