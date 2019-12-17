import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {DataTransferService} from '../data-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookList: Book[];
  p = 1;
  count = 10;

  constructor(private bookService: BookService,
              private dataTransferService: DataTransferService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.bookService.getCurrentBookList() !== undefined) {
      this.loadBook();
    } else {
      this.bookService.getBookList().subscribe(data => {
        this.bookService.setBookList(data);
        this.loadBook();
      });
    }
  }

  loadBook() {
    this.bookService.getBookList().subscribe(result => {
      this.bookList = this.bookService.getCurrentBookList();
    });
  }

  goToEditBlog(item: Book) {
    this.dataTransferService.setData(item);
    this.router.navigateByUrl('/edit-book');
  }

  deleteBlog(item: Book) {
    if (confirm('Are You Sure?')) {
      this.bookService.deleteBook(item);
      this.loadBook();
    }
  }
}
