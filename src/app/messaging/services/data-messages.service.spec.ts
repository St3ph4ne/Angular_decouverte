import { TestBed } from '@angular/core/testing';

import { DataMessagesService } from './data-messages.service';

describe('DataMessagesService', () => {
  let service: DataMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
