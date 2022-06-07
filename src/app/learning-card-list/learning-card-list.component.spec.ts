import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardListComponent } from './learning-card-list.component';

describe('LearningCardListComponent', () => {
  let component: LearningCardListComponent;
  let fixture: ComponentFixture<LearningCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
