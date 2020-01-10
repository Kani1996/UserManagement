import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import {AgGridModule} from "ag-grid-angular";
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonProfileComponent } from './components/person-profile/person-profile.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
