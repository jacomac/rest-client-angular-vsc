import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EventSearchResponse } from './EventSearchResponse';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  ticketApiKey: string = "MqTKO655uNSZydeRfag9h4Tbvbp0rTjk";

  constructor(private http: HttpClient) { }

  searchEvents(term: String): Observable<EventSearchResponse> {
    return this.http.get<EventSearchResponse>(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${term}&apikey=${this.ticketApiKey}`)
      .pipe(
        tap(res => console.log("success: ", res)),
        catchError(this.handleError<EventSearchResponse>('getHeroes'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("🐞 ERROR: ", error); 
      return of(result as T);
    };
  }

}
 