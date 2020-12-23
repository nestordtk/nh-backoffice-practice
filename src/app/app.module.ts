import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { MenuComponent } from './components/menu/menu.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { BookService } from './libraries/services/book.service';
import { BookApiService } from './libraries/services/book-api.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    PanelModule
  ],
  providers: [{provide: BookService, useClass: BookApiService}],
  bootstrap: [AppComponent],
})
export class AppModule { }
