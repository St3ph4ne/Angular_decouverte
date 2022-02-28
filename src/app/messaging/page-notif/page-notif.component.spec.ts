import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotifComponent } from './page-notif.component';

describe('PageNotifComponent', () => {
  let component: PageNotifComponent;
  let fixture: ComponentFixture<PageNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
