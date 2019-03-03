import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PapaParseModule } from 'ngx-papaparse';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Task2Component } from './component/task2/task2.component';

import { Task3Service } from './service/task3.service';
import { HttpModule } from '@angular/http';

import { CvslistsortPipe } from './pipes/cvslistsort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component,
    CvslistsortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PapaParseModule,
    FormsModule,
    HttpModule,
  ],
  providers: [Task3Service, CvslistsortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
