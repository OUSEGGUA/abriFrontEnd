import { Component, Input, OnInit } from '@angular/core';
import { AnnounceService } from 'src/app/services/announce/announce.service';
import { Announce } from 'src/app/models/announce/announce.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-announce-get-by-id',
  templateUrl: './announce-get-by-id.component.html',
  styleUrls: ['./announce-get-by-id.component.css']
})
export class AnnounceGetByIdComponent implements OnInit {

  @Input() announce: Announce = {
    title: '',
    description: '',
  };

  ngOnInit(): void {
    this.getById(this.route.snapshot.params["id"]);
  }

  constructor(
    private route: ActivatedRoute,
    private announceService: AnnounceService) { }


   

  getById(id: string): void {
    this.announceService.getById(id)
      .subscribe({
        next: (data) => {
          this.announce = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
