import { Injectable } from '@angular/core';
import { Book } from './books/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return [
    new Book("Kings Win", "Nceile", 2018),
    new Book("What Now", "Jones Mills", 2012),
    new Book("LOL", "Trevor Noah", 2017),
    new Book("Angular Development", "Ncedile Nkonyana", 2016),
    new Book("Win In Life", "Zozo Nolal", 1998),
    new Book("Yoco a Startup", "K Maphai", 2015),
    new Book("Reggae Musice Culture", "Bon Marley", 1978),
    new Book("Space technology", "Elon Musk", 2015),
    ]
  }
}
