import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosRepository } from './todos.repository';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodosRepository,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
