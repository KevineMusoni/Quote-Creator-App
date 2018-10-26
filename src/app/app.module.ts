import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LikeComponent } from './like.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'like', component: LikeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    SidebarComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
