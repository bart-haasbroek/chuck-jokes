import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChuckJokes from '@store/chuck-jokes';
import { chuckJokesState } from '@store/chuck-jokes';
import { Observable } from 'rxjs';
import { ChuckJokeInterface } from '@interfaces/chuck-joke.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public chuckJokes$: Observable<ChuckJokeInterface[]>;
  constructor(private store: Store<chuckJokesState>) {
  }

  ngOnInit(): void {
    this.chuckJokes$ = this.store.select(fromChuckJokes.selectAllChuckJokes);
  }

  public getJokes(): void {
    this.store.dispatch(fromChuckJokes.getChuckJokes());
  }
}
