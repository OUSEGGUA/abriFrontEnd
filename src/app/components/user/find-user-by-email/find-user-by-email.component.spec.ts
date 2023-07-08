import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserByEmailComponent } from './find-user-by-email.component';

describe('FindUserByEmailComponent', () => {
  let component: FindUserByEmailComponent;
  let fixture: ComponentFixture<FindUserByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindUserByEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindUserByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
