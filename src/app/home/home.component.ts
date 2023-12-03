import { Component, OnInit } from '@angular/core';
import { Event, EventSearchResponse } from '../EventSearchResponse';
import { EventService } from '../api.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements OnInit {
  
  eventList: Event[] = [];
  private searchResponse$!: Observable<EventSearchResponse>;
  private searchTerms = new Subject<string>();

  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.searchResponse$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.service.searchEvents(term)),
    );

    this.searchResponse$.subscribe(data => this.eventList = data._embedded.events);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
