import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  {
    path: 'quotes',
    component: QuotesComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [QuotesComponent, SidebarComponent];
