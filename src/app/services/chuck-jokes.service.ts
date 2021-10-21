import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ChuckJokesService {
    constructor(
        private http: HttpClient,
      ) { }

    public getJokes(amount: number = 10): Observable<any> {
        return this.http.get(`https://api.icndb.com/jokes/random/${amount}`);
    }
}
