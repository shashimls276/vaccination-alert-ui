import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationAlertSubscriptionComponent } from './vaccination-alert-subscription.component';

describe('VaccinationAlertSubscriptionComponent', () => {
  let component: VaccinationAlertSubscriptionComponent;
  let fixture: ComponentFixture<VaccinationAlertSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationAlertSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationAlertSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
