import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuCategoriaComponent } from './menu-categoria/menu-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
