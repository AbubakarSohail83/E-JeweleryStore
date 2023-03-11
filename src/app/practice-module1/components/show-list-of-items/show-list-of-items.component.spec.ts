import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListOfItemsComponent } from './show-list-of-items.component';

describe('ShowListOfItemsComponent', () => {
  let component: ShowListOfItemsComponent;
  let fixture: ComponentFixture<ShowListOfItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListOfItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowListOfItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
