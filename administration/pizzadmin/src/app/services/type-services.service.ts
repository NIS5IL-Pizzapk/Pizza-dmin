import { HttpHeaders } from '@angular/common/http';
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

  addTypeToProduit(typeId:number,produitId:number):Observable<any>{
    let body = new URLSearchParams();
    body.set('typeId', typeId.toString());
    body.set('produitId', produitId.toString());
    return this.apiService.doPost(this.url + 'add_to_produit', body, {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
      observe: 'response',
      responseType: 'json',
    });
  }

}
