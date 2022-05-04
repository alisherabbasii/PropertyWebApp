import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBasketSendingComponent } from './email-basket-sending.component';

describe('EmailBasketSendingComponent', () => {
  let component: EmailBasketSendingComponent;
  let fixture: ComponentFixture<EmailBasketSendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailBasketSendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBasketSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
