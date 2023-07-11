import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGetByIdComponent } from './property-get-by-id.component';

describe('PropertyGetByIdComponent', () => {
  let component: PropertyGetByIdComponent;
  let fixture: ComponentFixture<PropertyGetByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyGetByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
