import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URLAPI = 'https://api.pexilo.net/capi/api/';

  constructor(private http: HttpClient) {}

  // public getToken() {
  //   return 'Bearer ' + localStorage.getItem('logToken') || '';
  // }

  // public setAuthorizationHeader() {
  //   return new HttpHeaders().set('Authorization', this.getToken());
  // }

  public doGet(url: string, options?: any) {
    return this.http
      .get(this.URLAPI + url, options)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  public doPost(url: string, body: any, options?: any) {
    return this.http
      .post(this.URLAPI + url, body, options)
      .pipe(retry(0), catchError(this.errorHandler));
  }
  public doPut(url: string, data: any, options?: any) {
    return this.http
      .put(this.URLAPI + url, data, options)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  public doDelete(url: string, options?: any) {
    return this.http.delete(this.URLAPI + url, options);
  }

  //Error interceptor
  errorHandler(error: any) {
    const errorTypes = ['PWDERROR', 'MAILERROR'];
    let errorMessage = '';
    let knownError = false;

    if (typeof error.error === 'string') {
      errorTypes.map((type) => {
        if (error.error.toLowerCase().includes(type.toLocaleLowerCase())) {
          errorMessage = type;
          knownError = true;
        }
      });
    }

    if (error.error instanceof ErrorEvent && !knownError) {
      // Get client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else if (!knownError) {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(() => {
      return {
        error: errorMessage,
        knownError: knownError,
      };
    });
  }
}
