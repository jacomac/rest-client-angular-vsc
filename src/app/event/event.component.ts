import { Component, Input } from '@angular/core';
import { Event } from '../TicketMasterData';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {

  @Input() event!: Event;

  ngOnInit(): void {
    console.log(this.event)
  }

  hasPriceRange(): boolean {
    return typeof(this.event.priceRanges) != "undefined";
  }

  hasVenue(): boolean {
    if (typeof(this.event._embedded) === "undefined")
      return false; 
    if (typeof(this.event._embedded.venues) === "undefined")
      return false; 
    if (typeof(this.event._embedded.venues[0]) === "undefined")
      return false; 
    return true;  
  }
      
  goToLink(url: string){
    console.log("Link:", url);
    window.open(url, "_blank");
  }

}
