import { Injectable } from '@angular/core';
import { Book } from './books/book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseURL: String = `http://api.openweathermap.org/data/2.5/weather`;
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

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return of(this.books)
  }

  getCityWeather(cityName: String): Observable<any> {
    return this.http.get(this.baseURL + `?q=${cityName}&APPID=7b1a8c03a91f5666e26dc0fa9e3b519d`);
  }
}
