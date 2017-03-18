import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {SearchFormComponent} from "./search/search-form/search-form.component";
import {SearchComponent} from "./search/search.component";
import {SearchResultsComponent} from "./search/search-results/search-results.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ArticleService} from "./shared/article.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
