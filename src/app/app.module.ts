import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { ModuloTesteComponent } from './modulo-teste/modulo-teste.component';
import { ModuloTesteModule } from './modulo-teste/modulo-teste.module';
import { ComponentTestService } from './component-test/component-test.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ComponentTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloTesteModule
  ],
  providers: [ ComponentTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
