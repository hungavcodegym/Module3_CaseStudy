import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[];
  public url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  setBookList(books: Book[]) {
    this.books = books;
  }

  getCurrentBookList() {
    return this.books;
  }

  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url);
  }

  addBook(book: Book) {
    console.log(this.books.length);
    book.id = this.books[this.books.length - 1].id + 1;
    this.books.push(book);
  }

  editBook(book: Book) {
    for (const item of this.books) {
      if (item.id === book.id) {
        item.title = book.title;
        item.body = book.body;
      }
    }
  }

  deleteBook(book: Book) {
    const tmp = [];
    for (const item of this.books) {
      if (item.id !== book.id) {
        console.log(item.id);
        console.log(book.id);
        // tmp.push(item);
      }
    }
    this.books = tmp;
  }
}
