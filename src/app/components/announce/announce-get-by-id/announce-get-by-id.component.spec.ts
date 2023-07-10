import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceGetByIdComponent } from './announce-get-by-id.component';

describe('AnnounceGetByIdComponent', () => {
  let component: AnnounceGetByIdComponent;
  let fixture: ComponentFixture<AnnounceGetByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnounceGetByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnounceGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
