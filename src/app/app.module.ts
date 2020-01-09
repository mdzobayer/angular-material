import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, FormControl } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormControl
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
