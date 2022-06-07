import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardListItemComponent } from './learning-card-list-item.component';

describe('LearningCardListItemComponent', () => {
  let component: LearningCardListItemComponent;
  let fixture: ComponentFixture<LearningCardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
