import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNotifComponent } from './business-notif.component';

describe('BusinessNotifComponent', () => {
  let component: BusinessNotifComponent;
  let fixture: ComponentFixture<BusinessNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessNotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
