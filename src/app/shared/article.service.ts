import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Article} from "./article.model";
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  constructor(private http: Http) {

  }

  static SEARCH_URL = 'https://www.babelcoder.com/api/v1/articles/search';

  search(query: string): Observable<Article[]> {
    let params: URLSearchParams = new URLSearchParams();

    params.set('query', query);

    return this.http
      .get(ArticleService.SEARCH_URL, {search: params})
      .map((r: Response) => r.json().articles as Article[]);
  }

}
