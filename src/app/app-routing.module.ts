import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncesListComponent } from './components/announces-list/announces-list.component';


const routes: Routes = [
  { path: 'announces', component: AnnouncesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
