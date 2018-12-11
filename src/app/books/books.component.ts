import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private booksService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.booksService.getBooks();
  }
}
