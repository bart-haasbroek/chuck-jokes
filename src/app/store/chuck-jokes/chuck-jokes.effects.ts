import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ChuckJokesActions from './chuck-jokes.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ChuckJokesService } from '@app/services/chuck-jokes.service';

@Injectable()
export class ChuckJokesEffects {
    constructor(
        private actions$: Actions,
        public chuckJokes: ChuckJokesService
    ) { }

    @Effect()
    getChuckJokes$ = this.actions$.pipe(
        ofType(ChuckJokesActions.getChuckJokes),
        switchMap(() => {
            return this.chuckJokes.getJokes().pipe(
                map(res => ChuckJokesActions.getChuckJokesSuccess(res.value)),
                catchError(error => of(ChuckJokesActions.getChuckJokesFail()))
            )
        })
    );
}
