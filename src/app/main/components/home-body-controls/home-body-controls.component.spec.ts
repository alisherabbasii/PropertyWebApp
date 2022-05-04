import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyControlsComponent } from './home-body-controls.component';

describe('HomeBodyControlsComponent', () => {
  let component: HomeBodyControlsComponent;
  let fixture: ComponentFixture<HomeBodyControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBodyControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBodyControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
