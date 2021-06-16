import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationSearchComponent } from './vaccination-search.component';

describe('VaccinationSearchComponent', () => {
  let component: VaccinationSearchComponent;
  let fixture: ComponentFixture<VaccinationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
