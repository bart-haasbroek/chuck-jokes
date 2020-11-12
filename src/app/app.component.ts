import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChuckJokes from '@store/chuck-jokes';
import { chuckJokesState } from '@store/chuck-jokes';
import { BehaviorSubject, combineLatest, empty, interval, Observable } from 'rxjs';
import { ChuckJokeInterface } from '@interfaces/chuck-joke.interface';
import { filter, map, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public chuckJokes$: Observable<ChuckJokeInterface[]>;
  public favouriteChuckJokes$: Observable<ChuckJokeInterface[]>;
  public amountOfFavouriteJokes$: Observable<number>;
  private enableTimer$ = new BehaviorSubject<boolean>(true);

  constructor(private store: Store<chuckJokesState>) {
    this.store.dispatch(fromChuckJokes.getSavedFavouriteJokes());
  }

  ngOnInit(): void {
    this.chuckJokes$ = this.store.select(fromChuckJokes.selectAllChuckJokes);
    this.favouriteChuckJokes$ = this.store.select(fromChuckJokes.selectFavouriteJokes);
    this.amountOfFavouriteJokes$ = this.store.select(fromChuckJokes.selectAmountOfFavouriteJokes);
    this.subscribeToTimer();
  }

  public subscribeToTimer(): void {
    const interval$ = interval(1000).pipe(
      filter((count) => count && count % 5 === 0),
    )

    combineLatest([this.amountOfFavouriteJokes$, this.enableTimer$]).pipe(
      map((data) => data[0] < 10 && data[1]),
      switchMap((startInterval) => startInterval ? interval$ : empty())
    ).subscribe(() => {
      this.store.dispatch(fromChuckJokes.fetchNewChuckJokeAsFavourite());
    });
  }

  public getJokes(): void {
    this.store.dispatch(fromChuckJokes.getChuckJokes());
  }

  public addToFavourite(item: ChuckJokeInterface): void {
    this.store.dispatch(fromChuckJokes.markJokeAsFavourite(item));
  }
  
  public removeFavourite(item: ChuckJokeInterface): void {
    this.store.dispatch(fromChuckJokes.removeJokeAsFavourite(item));
  }

  public toggleInterval(): void {
    this.enableTimer$.next(!this.enableTimer$.value);
  }

  public get timerIsEnabled(): boolean {
    return this.enableTimer$.value;
  }
}
