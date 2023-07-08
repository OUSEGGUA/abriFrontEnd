import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncesListComponent } from './components/announce/announces-list/announces-list.component';
import { AddAnnounceComponent } from './components/announce/add-announce/add-announce.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { FindUserByEmailComponent } from './components/user/find-user-by-email/find-user-by-email.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", component: HomeComponent },
  { path: 'announces', component: AnnouncesListComponent },
  { path: 'add', component: AddAnnounceComponent },
  { path: 'register', component: AddUserComponent },
  { path: 'find', component: FindUserByEmailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
