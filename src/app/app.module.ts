import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncesListComponent } from './components/announce/announces-list/announces-list.component';
import { AddAnnounceComponent } from './components/announce/add-announce/add-announce.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { FindUserByEmailComponent } from './components/user/find-user-by-email/find-user-by-email.component';
import { AddPropertyComponent } from './components/property/add-property/add-property.component';
import { FindPropertyComponent } from './components/property/find-property/find-property.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncesListComponent,
    AddAnnounceComponent,
    AddUserComponent,
    FindUserByEmailComponent,
    AddPropertyComponent,
    FindPropertyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }