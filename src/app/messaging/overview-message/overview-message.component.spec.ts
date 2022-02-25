import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewMessageComponent } from './overview-message.component';

describe('OverviewMessageComponent', () => {
  let component: OverviewMessageComponent;
  let fixture: ComponentFixture<OverviewMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
