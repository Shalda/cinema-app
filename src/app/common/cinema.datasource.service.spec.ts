import { TestBed } from '@angular/core/testing';

import { Cinema.RepositoryService } from './cinema.repository.service';

describe('Cinema.RepositoryService', () => {
  let service: Cinema.RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cinema.RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
