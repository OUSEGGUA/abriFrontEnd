import { Component } from '@angular/core';
import { PropertyModel } from 'src/app/models/property/property.model';
import { PropertyServiceService } from 'src/app/services/property/property.service.service';

@Component({
  selector: 'app-find-property',
  templateUrl: './find-property.component.html',
  styleUrls: ['./find-property.component.css']
})
export class FindPropertyComponent {
  properties?: PropertyModel[];

  constructor(private propertyService: PropertyServiceService) { }


  ngOnInit(): void {
    this.retrieveProperties();
  }


  retrieveProperties(): void {
    this.propertyService.getAll()
      .subscribe({
        next: (data) => {
          this.properties = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
