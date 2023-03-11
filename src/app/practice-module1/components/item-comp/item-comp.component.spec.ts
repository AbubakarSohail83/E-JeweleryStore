import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompComponent } from './item-comp.component';

describe('ItemCompComponent', () => {
  let component: ItemCompComponent;
  let fixture: ComponentFixture<ItemCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
