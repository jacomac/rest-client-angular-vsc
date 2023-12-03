import { Component, Input } from '@angular/core';
import { Event } from '../EventSearchResponse';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

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
