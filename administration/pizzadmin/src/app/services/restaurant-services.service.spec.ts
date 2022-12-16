import { TestBed } from '@angular/core/testing';

import { RestaurantServicesService } from './restaurant-services.service';

describe('RestaurantServicesService', () => {
  let service: RestaurantServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
