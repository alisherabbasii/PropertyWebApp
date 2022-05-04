import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsProfileHomeComponent } from './accounts-profile-home.component';

describe('AccountsProfileHomeComponent', () => {
  let component: AccountsProfileHomeComponent;
  let fixture: ComponentFixture<AccountsProfileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsProfileHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
