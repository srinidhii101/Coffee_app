import { Injectable } from '@angular/core';
import { Subject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  selectedCoffee: any;
  allCoffee: any = []

  constructor(private http: HttpClient) { }

  getCoffeeData(): Observable<any> {
    return this.http.get<any>("https://random-data-api.com/api/coffee/random_coffee?size=50").pipe(catchError(this.error))
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
