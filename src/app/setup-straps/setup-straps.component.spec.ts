import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupStrapsComponent } from './setup-straps.component';

describe('SetupStrapsComponent', () => {
  let component: SetupStrapsComponent;
  let fixture: ComponentFixture<SetupStrapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupStrapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupStrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
