import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {DataTransferService} from '../data-transfer.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router,
              private dataTransfer: DataTransferService) {
  }

  ngOnInit() {
    this.book = this.dataTransfer.getData();
    this.bookForm = this.fb.group({
      id: [this.book.id],
      title: [this.book.title],
      body: [this.book.body]
    });
  }

  onSubmit() {
    this.bookService.editBook(this.bookForm.value);
    this.router.navigateByUrl('/');
  }
}
