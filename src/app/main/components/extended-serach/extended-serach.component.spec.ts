import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedSerachComponent } from './extended-serach.component';

describe('ExtendedSerachComponent', () => {
  let component: ExtendedSerachComponent;
  let fixture: ComponentFixture<ExtendedSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
