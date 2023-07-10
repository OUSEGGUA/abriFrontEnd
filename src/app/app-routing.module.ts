import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncesListComponent } from './components/announce/announces-list/announces-list.component';
import { AnnounceGetByIdComponent } from './components/announce/announce-get-by-id/announce-get-by-id.component';
import { AddAnnounceComponent } from './components/announce/add-announce/add-announce.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { FindUserByEmailComponent } from './components/user/find-user-by-email/find-user-by-email.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:"", component: HomeComponent },
  { path: 'announces', component: AnnouncesListComponent },
  { path: 'add', component: AddAnnounceComponent },
  {path: 'byId/:id', component:AnnounceGetByIdComponent},
  { path: 'register', component: AddUserComponent },
  { path: 'find', component: FindUserByEmailComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
