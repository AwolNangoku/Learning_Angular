import { Injectable } from '@angular/core';
import { Book } from './books/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    new Book("Kings Win", "Nceile", 2018),
    new Book("What Now", "Jones Mills", 2012),
    new Book("LOL", "Trevor Noah", 2017),
    new Book("Angular Development", "Ncedile Nkonyana", 2016),
    new Book("Win In Life", "Zozo Nolal", 1998),
    new Book("Yoco a Startup", "K Maphai", 2015),
    new Book("Reggae Musice Culture", "Bon Marley", 1978),
    new Book("Space technology", "Elon Musk", 2015),
    ]

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.books)
  }
}
