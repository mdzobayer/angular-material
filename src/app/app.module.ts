import { MatInputModule } from '@angular/material/input';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule

  ],
  entryComponents: [
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
