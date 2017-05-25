import {Component, OnInit} from '@angular/core';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {Article} from '../shared/article.model';
import {ArticleService} from '../shared/article.service'

@Component({
  selector: 'app-search',
  template: `
    <div>
      <app-search-form (searchFieldChange)='searchArticles($event.value)'>
      </app-search-form>
      <app-search-results [results]='articles'></app-search-results>
    </div>
  `
})
export class SearchComponent implements OnInit {

  public articles: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articles = this.searchTerms
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(
        term => term ?
          this.articleService.search(term) :
          Observable.of<Article[]>([])
      );
  }

  searchArticles(term) {
    this.searchTerms.next(term);
  }

}
