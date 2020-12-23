import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookTableComponent } from './components/book-table/book-table.component';

import { SharedModule as MyAppSharedModule } from 'src/app/shared/shared.module';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { BookCreateComponent } from './pages/book-create/book-create.component';
import { BookEditComponent } from './pages/book-edit/book-edit.component';
import { BookFormComponent } from './components/book-form/book-form.component';


@NgModule({
  declarations: [
    BookTableComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookFormComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    PanelModule,
    MyAppSharedModule,
  ]
})
export class BooksModule { }
