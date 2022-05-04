import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsUserSettingsComponent } from './accounts-user-settings.component';

describe('AccountsUserSettingsComponent', () => {
  let component: AccountsUserSettingsComponent;
  let fixture: ComponentFixture<AccountsUserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsUserSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
