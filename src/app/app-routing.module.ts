import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncesListComponent } from './components/announces-list/announces-list.component';
import { AddAnnounceComponent } from './components/add-announce/add-announce.component';


const routes: Routes = [
  { path: 'announces', component: AnnouncesListComponent },
  { path: 'add', component: AddAnnounceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
