import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyModel } from 'src/app/models/property/property.model';
import { AnnounceService } from 'src/app/services/announce/announce.service';
import { PropertyServiceService } from 'src/app/services/property/property.service.service';

@Component({
  selector: 'app-property-get-by-id',
  templateUrl: './property-get-by-id.component.html',
  styleUrls: ['./property-get-by-id.component.css']
})
export class PropertyGetByIdComponent {

  @Input() property: PropertyModel = {
      designation: '',
  };

  ngOnInit(): void {
    this.getById(this.route.snapshot.params["id"]);
  }

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyServiceService) { }


   

  getById(id: string): void {
    this.propertyService.getById(id)
      .subscribe({
        next: (data) => {
          this.property = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
