export interface TicketMasterData {
  _embedded: Embedded
}

export interface Embedded {
  events: Event[]
}

export interface Event {
  name: string
  type: string
  id: string
  url: string
  locale: string
  images: Image[]
  dates: Dates
  priceRanges: PriceRange[]
  _embedded: Embedded2
}

export interface Image {
  url: string
}

export interface Dates {
  start: Start
}

export interface Start {
  localDate: string
  localTime: string
}

export interface PriceRange {
  currency: string
  min: number
  max: number
}

export interface Attraction {
  href: string
}

export interface Venue {
  href: string
}

export interface Embedded2 {
  venues: Venue2[]
}

export interface Venue2 {
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  postalCode: string
  city: City
  country: Country
}

export interface City {
  name: string
}

export interface Country {
  name: string
}