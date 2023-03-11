import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm1DashboardComponent } from './pm1-dashboard.component';

describe('Pm1DashboardComponent', () => {
  let component: Pm1DashboardComponent;
  let fixture: ComponentFixture<Pm1DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pm1DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pm1DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
