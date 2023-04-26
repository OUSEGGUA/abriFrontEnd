import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce.model';
import { AnnounceService } from 'src/app/services/announce.service';


@Component({
  selector: 'app-announces-list',
  templateUrl: './announces-list.component.html',
  styleUrls: ['./announces-list.component.css']
})
export class AnnouncesListComponent  implements OnInit{
  announces?: Announce[];

  constructor(private announceService: AnnounceService) { }


  ngOnInit(): void {
    this.retrieveAnnounces();
  }


  retrieveAnnounces(): void {
    this.announceService.getAll()
      .subscribe({
        next: (data) => {
          this.announces = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
