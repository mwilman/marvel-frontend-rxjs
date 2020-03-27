import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, distinctUntilKeyChanged, map, switchMap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) {
  }

  search$ = new BehaviorSubject('');
  heroes$ = this.search$
    .pipe(
      // debounceTime(500),
      // distinctUntilChanged(),
      switchMap(term => this.http.get<any>(`api/heroes/?name=${term}`)
        .pipe(
          map(res => res)
        ))
    );

  setTerm(term: string) {
    this.search$.next(term);
  }
}
