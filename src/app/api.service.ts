import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TicketMasterData } from './TicketMasterData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ticketApiKey: string = "eDqkAcI5hIr92LAEsw94WqSjELpoxFV8";

  constructor(private http: HttpClient) { }

  getDiscoveryEventGermany(): Observable<TicketMasterData> {
    return this.http.get<TicketMasterData>(`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=${this.ticketApiKey}`)
      .pipe(
        tap(res => console.log("success: ", res)),
        catchError(this.handleError<TicketMasterData>('getHeroes'))
      );
  }

  searchEventInGermany(term: String): Observable<TicketMasterData> {
    return this.http.get<TicketMasterData>(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${term}&apikey=${this.ticketApiKey}`)
      .pipe(
        tap(res => console.log("success: ", res)),
        catchError(this.handleError<TicketMasterData>('getHeroes'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("🐞 ERROR: ", error); 
      return of(result as T);
    };
  }

}
 