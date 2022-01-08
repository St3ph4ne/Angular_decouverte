import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessWidgetComponent } from './business-widget.component';

describe('BusinessWidgetComponent', () => {
  let component: BusinessWidgetComponent;
  let fixture: ComponentFixture<BusinessWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
