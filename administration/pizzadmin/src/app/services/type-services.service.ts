import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api-services.service';

@Injectable({
  providedIn: 'root'
})
export class TypeServicesService {
  url = 'typeproduit/';

  constructor(private apiService: ApiService) { }

  getTypesData(): Observable<any>{
    return this.apiService.doGet(this.url + 'get_all', {
      // headers: this.apiService.setAuthorizationHeader(),
      observe: 'response',
      responseType: 'json',
    });
  }

}
