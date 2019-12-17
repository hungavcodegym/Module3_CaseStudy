import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {AddBookComponent} from './add-book/add-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';


const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent,
  },
  {
    path: 'edit-book',
    component: EditBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
