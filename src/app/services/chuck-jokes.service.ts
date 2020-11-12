import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ChuckJokesService {
    constructor(
        private http: HttpClient,
      ) { }

    public getJokes(): Observable<any> {
        return this.http.get('http://api.icndb.com/jokes/random/10');
    }
}
