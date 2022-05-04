import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsChangePasswordComponent } from './accounts-change-password.component';

describe('AccountsChangePasswordComponent', () => {
  let component: AccountsChangePasswordComponent;
  let fixture: ComponentFixture<AccountsChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
