import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedinPopupComponent } from './logedin-popup.component';

describe('LogedinPopupComponent', () => {
  let component: LogedinPopupComponent;
  let fixture: ComponentFixture<LogedinPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogedinPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedinPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
