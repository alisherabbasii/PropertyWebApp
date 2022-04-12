import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnDropDownComponent } from './single-column-drop-down.component';

describe('SingleColumnDropDownComponent', () => {
  let component: SingleColumnDropDownComponent;
  let fixture: ComponentFixture<SingleColumnDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleColumnDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
