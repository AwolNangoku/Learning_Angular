import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  weather: String = '';
  books: Book[] = [];
  constructor(private booksService: BookService) { }

  ngOnInit() {
    this.getBooks();
    this.printWeather('Cape Town')
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(books => this.books = books);
  }

  printWeather(city: String): void {
    this.booksService.getCityWeather(city).subscribe( weather => this.weather = JSON.stringify(weather));
  }
}
