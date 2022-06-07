import { TestBed } from '@angular/core/testing';

import { LearningCardModelService } from './learning-card-model.service';

describe('LearningCardModelService', () => {
  let service: LearningCardModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningCardModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
