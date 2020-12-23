import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { formatDate } from '@angular/common';
import { Book } from 'src/app/libraries/interfaces/book';
import { BookService } from 'src/app/libraries/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  cover: File;
  constructor(
    private frmBuilder: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookForm = this.frmBuilder.group({
      name: [null, Validators.required],
      isbn: [null, Validators.required],
      image: [null],
      language: [null, [Validators.required, Validators.pattern(/^en|es$/)]],
      publishedDate: [null, Validators.required],
      publisher: [null, Validators.required],
      numberPages: [null, [Validators.required, Validators.min(1)]],
      license: [null, Validators.required],
      summary: [null, Validators.required]
    })
  }

  get f() {
    return this.bookForm.controls;
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value;
      const formData = new FormData();

      formData.append('name', book.name);
      formData.append('isbn', book.isbn);
      formData.append('image', book.image, book.image.name);
      formData.append('language', book.language);
      formData.append('publishedDate', formatDate(book.publishedDate, 'yyyy-MM-dd', 'en'));
      formData.append('publisher', book.publisher);
      formData.append('numberPages', String(book.numberPages));
      formData.append('license', book.license);
      formData.append('summary', book.summary);
      
      this.bookService.createBook(formData).subscribe(
        book => console.log(book)
      )
    }
  }

  changeFile(event) {
    if (event.target.files.length > 0) {
      this.cover = event.target.files[0];
      this.bookForm.get('image').setValue(this.cover);
    }
  }

}
