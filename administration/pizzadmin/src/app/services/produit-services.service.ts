import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api-services.service';
import { HttpHeaders } from '@angular/common/http';
import { IProduit } from '../modeles/produitsModel';

@Injectable({
  providedIn: 'root',
})
export class ProduitServicesService {
  url = 'produit/';

  constructor(private apiService: ApiService) {}

  getProduitsData(): Observable<any>{
    return this.apiService.doGet(this.url + 'get_all', {
      // headers: this.apiService.setAuthorizationHeader(),
      observe: 'response',
      responseType: 'json',
    });
  }


  // getBaliseById(id: number): Observable<any> {
  //   return this.apiService.doGet(this.url + id, {
  //     // headers: this.apiService.setAuthorizationHeader(),
  //     observe: 'response',
  //     responseType: 'json',
  //   });
  // }

  // AddBalise(serialNbBeacon: string, label: string): Observable<any> {
  //   let body = new URLSearchParams();
  //   body.set('label', label);
  //   body.set('serialNbBeacon', serialNbBeacon);

  //   return this.apiService.doPost(this.url + 'add-balise', body, {
  //     headers: new HttpHeaders().set(
  //       'Content-Type',
  //       'application/x-www-form-urlencoded'
  //     ),
  //     observe: 'response',
  //     responseType: 'json',
  //   });
  // }

  // updateCapteur(serialNbBeacon: number, label: string): Observable<any> {
  //   let body = new URLSearchParams();
  //   body.set('label', label);

  //   return this.apiService.doPut(this.url + 'update/' + serialNbBeacon, body, {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'application/x-www-form-urlencoded')
  //       .set('Authorization', this.apiService.getToken()),
  //     observe: 'response',
  //     responseType: 'json',
  //   });
  // }
  // deleteBaliseById(id: number): Observable<any> {
  //   return this.apiService.doDelete(this.url + 'delete/' + id, {
  //     headers: this.apiService.setAuthorizationHeader(),
  //     observe: 'response',
  //     responseType: 'text',
  //   });
  // }
}
