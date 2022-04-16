import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyManagementSubmenuDetailsComponent } from './property-management-submenu-details.component';

describe('PropertyManagementSubmenuDetailsComponent', () => {
  let component: PropertyManagementSubmenuDetailsComponent;
  let fixture: ComponentFixture<PropertyManagementSubmenuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyManagementSubmenuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyManagementSubmenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
