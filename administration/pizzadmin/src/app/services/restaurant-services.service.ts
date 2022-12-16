import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api-services.service';


@Injectable({
  providedIn: 'root'
})
export class RestaurantServicesService {
  url = 'restaurant/';

  constructor(private apiService: ApiService) { }

  getRestaurantsData(): Observable<any>{
    return this.apiService.doGet(this.url + 'get_all', {
      // headers: this.apiService.setAuthorizationHeader(),
      observe: 'response',
      responseType: 'json',
    });
  }

}
