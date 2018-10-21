import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: ProfileFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    QuotesComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
