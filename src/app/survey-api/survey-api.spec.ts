import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyApiComponent } from './survey-api';

describe("SurveyApiComponent", () => {
  let service: SurveyApiComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyApiComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
