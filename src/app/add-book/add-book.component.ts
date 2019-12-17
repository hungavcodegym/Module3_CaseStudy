import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: [''],
      body: [''],
    });
  }

  onSubmit() {
    this.bookService.addBook(this.bookForm.value);
  }

}
