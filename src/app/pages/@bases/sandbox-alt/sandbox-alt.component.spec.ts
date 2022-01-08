import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxAltComponent } from './sandbox-alt.component';

describe('SandboxAltComponent', () => {
  let component: SandboxAltComponent;
  let fixture: ComponentFixture<SandboxAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
