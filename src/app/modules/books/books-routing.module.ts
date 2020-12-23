import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './pages/book-create/book-create.component';
import { BookEditComponent } from './pages/book-edit/book-edit.component';
import { BookListComponent } from './pages/book-list/book-list.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book',
    component: BookCreateComponent
  },
  {
    path: 'book/:id',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
