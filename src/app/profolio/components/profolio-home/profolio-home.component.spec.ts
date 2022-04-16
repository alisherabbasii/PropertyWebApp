import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolioHomeComponent } from './profolio-home.component';

describe('ProfolioHomeComponent', () => {
  let component: ProfolioHomeComponent;
  let fixture: ComponentFixture<ProfolioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfolioHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfolioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
