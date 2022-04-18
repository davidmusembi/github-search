import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
import { MainpageComponent } from './homepage/mainpage/mainpage.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { RepositorySearchComponent } from './repository-search/repository-search/repository-search.component';
import { UserSearchComponent } from './user-search/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainpageComponent,
    NavBarComponent,
    NotFoundComponent,
    RepositorySearchComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
