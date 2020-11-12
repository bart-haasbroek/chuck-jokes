import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ChuckJokesActions from './chuck-jokes.actions';
import { switchMap, map, catchError, tap, withLatestFrom } from 'rxjs/operators';
import { ChuckJokesService } from '@app/services/chuck-jokes.service';
import { Store } from '@ngrx/store';
import { chuckJokesState } from './chuck-jokes.reducer';
import { selectFavouriteJokes } from './chuck-jokes.selectors';
import { ChuckJokeInterface } from '@app/interfaces/chuck-joke.interface';
import { of } from 'rxjs';

@Injectable()
export class ChuckJokesEffects {
    constructor(
        private actions$: Actions,
        public chuckJokesService: ChuckJokesService,
        public store: Store<chuckJokesState>
    ) { }

    @Effect()
    getChuckJokes$ = this.actions$.pipe(
        ofType(ChuckJokesActions.getChuckJokes),
        switchMap(() => {
            return this.chuckJokesService.getJokes().pipe(
                map(res => ChuckJokesActions.getChuckJokesSuccess(res.value)),
                catchError(error => of(ChuckJokesActions.getChuckJokesFail()))
            )
        })
    );

    @Effect()
    getSavedFavoriteJokes$ = this.actions$.pipe(
        ofType(ChuckJokesActions.getSavedFavouriteJokes),
        switchMap(() => {
            const favouriteJokes: ChuckJokeInterface[] = JSON.parse(localStorage.getItem('favouriteJokes')) || [];
            return of(ChuckJokesActions.getSavedFavouriteJokesSuccess(favouriteJokes))
        }),
    );

    @Effect({dispatch: false})
    saveFavourites$ = this.actions$.pipe(
        ofType(ChuckJokesActions.markJokeAsFavourite, ChuckJokesActions.removeJokeAsFavourite),
        withLatestFrom(this.store.select(selectFavouriteJokes)),
        map((x) => x[1]),
        tap((favourites: ChuckJokeInterface[]) => {
            localStorage.setItem('favouriteJokes', JSON.stringify(favourites));
        })
    );
}
