import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentTestService {

  constructor() { }

  getCursos(){
    return ["Typescript", "Angular", "HTML", "SCSS"];
  }

}
