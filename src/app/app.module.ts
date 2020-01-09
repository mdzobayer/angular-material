import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DialogOverviewExample } from './dialog-overview-example/dialog-overview-example.component';

// Form Module
import { FormsModule } from '@angular/forms';

// Material Inputs
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  entryComponents: [
    MyDialogComponent,
    DialogOverviewExampleDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
