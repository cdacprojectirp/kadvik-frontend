import { TestBed } from '@angular/core/testing';

import { TimeTableAdminService } from './time-table-admin.service';

describe('TimeTableAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeTableAdminService = TestBed.get(TimeTableAdminService);
    expect(service).toBeTruthy();
  });
});
