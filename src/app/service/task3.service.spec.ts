import { TestBed } from '@angular/core/testing';

import { Task3Service } from './task3.service';

describe('Task3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Task3Service = TestBed.get(Task3Service);
    expect(service).toBeTruthy();
  });
});
