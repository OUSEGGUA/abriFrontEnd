import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncesListComponent } from './components/announces-list/announces-list.component';
import { AddAnnounceComponent } from './components/add-announce/add-announce.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncesListComponent,
    AddAnnounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
