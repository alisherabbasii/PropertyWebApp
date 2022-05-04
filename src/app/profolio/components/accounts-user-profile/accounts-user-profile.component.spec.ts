import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsUserProfileComponent } from './accounts-user-profile.component';

describe('AccountsUserProfileComponent', () => {
  let component: AccountsUserProfileComponent;
  let fixture: ComponentFixture<AccountsUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
