import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingMessageComponent } from './writing-message.component';

describe('WritingMessageComponent', () => {
  let component: WritingMessageComponent;
  let fixture: ComponentFixture<WritingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
