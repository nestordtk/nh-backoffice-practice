import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookTableComponent } from './components/book-table/book-table.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    BookTableComponent,
    BookListComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonModule,
    TableModule,
    PanelModule
  ]
})
export class BooksModule { }
