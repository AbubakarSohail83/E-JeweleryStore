import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemCategoryDashboardComponent } from './add-item-category-dashboard.component';

describe('AddItemCategoryDashboardComponent', () => {
  let component: AddItemCategoryDashboardComponent;
  let fixture: ComponentFixture<AddItemCategoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemCategoryDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemCategoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
