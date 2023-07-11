import { Component } from '@angular/core';
import { PropertyModel } from 'src/app/models/property/property.model';
import { PropertyServiceService } from 'src/app/services/property/property.service.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {

  property: PropertyModel = {
    designation: '',

  };
  submitted = false;

  constructor(private propertyService: PropertyServiceService) { }



  saveProperty(): void {
    this.propertyService.create(this.property)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)

      });
  }
  newProperty(): void {
    this.submitted = false;
    this.property = {
      designation: '',
    };
  }

}
