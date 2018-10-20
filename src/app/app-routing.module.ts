import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WritersComponent } from './writers/writers.component';
import { ProfileComponent } from './profile/profile.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    // this path will show all the writers
    path: '',
    component: WritersComponent
  },
  {
    // this path will show all the writer's profile
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
