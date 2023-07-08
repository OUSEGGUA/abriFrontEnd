import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce/announce.model';
import { AnnounceService } from 'src/app/services/announce/announce.service';

@Component({
  selector: 'app-add-announce',
  templateUrl: './add-announce.component.html',
  styleUrls: ['./add-announce.component.css']
})
export class AddAnnounceComponent{
  announce: Announce = {
    title: '',
    description: '',
    
  };
  submitted = false;
  
  constructor(private announceService: AnnounceService) { }



  saveAnnounce(): void {
    this.announceService.create(this.announce)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
        
      });
  }
//  save(): void {
  //  if (this.announce) {
    //  this.announceService.create(this.announce)
        //.subscribe(() => this.goBack());
    //}
  //}


  newAnnounce(): void {
    this.submitted = false;
    this.announce = {
      title: '',
      description: '',
    };
}
}
